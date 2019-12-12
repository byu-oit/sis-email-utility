import express from 'express'
import path from 'path'
import Enforcer from 'openapi-enforcer-middleware'
import * as auth from './auth'
import {ensureS3ResourcesExist} from './s3/common'
import {checkEmailIdentityExists} from './ses/common'

(async (): Promise<void> => {
  try {
    const app = express()
    app.use(express.json())

    const controllerDir = path.resolve(__dirname, 'controllers')
    const oasPath = path.resolve(__dirname, 'api.json')

    const enforcer = new Enforcer(oasPath)
    // Wait for enforcer to resolve OAS doc
    await enforcer.promise

    // Init controllers
    enforcer.controllers(controllerDir)

    // Plugin auth middleware to Express
    app.use(auth.middleware())

    // Plugin enforcer middleware to Express
    app.use(enforcer.middleware())

    // Ensure AWS resources exist
    await ensureS3ResourcesExist()
    await checkEmailIdentityExists()

    // Start server
    const port = process.env.PORT ? parseInt(process.env.PORT) : 8080
    app.listen(port, err => {
      if (err) console.error(err.stack)
      console.log(`Server started on port ${port}`)
    })
  } catch (e) {
    console.error(e)
  }
})()
