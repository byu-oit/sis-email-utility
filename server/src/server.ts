import express from 'express'
import path from 'path'
import Enforcer from 'openapi-enforcer-middleware'
import ByuJwt from 'byu-jwt'
import * as authorize from './auth'

(async (): Promise<void> => {
  try {
    const app = express()
    app.use(express.json())

    const controllerDir = path.resolve(__dirname, 'controllers')
    const oasPath = path.resolve(__dirname, 'api.json')

    // Wait for enforcer to resolve OAS doc
    const enforcer = new Enforcer(oasPath)
    await enforcer.promise

    // Init controllers
    await enforcer.controllers(controllerDir)

    // Plugin auth middleware to Express
    const byuJwt = ByuJwt({development: process.env.NODE_ENV === 'development'})
    app.use(byuJwt.authenticateUAPIMiddleware)
    app.use(authorize.middleware())

    // Plugin enforcer middleware to Express
    app.use(enforcer.middleware())

    // Start server
    const port = process.env.PORT ? parseInt(process.env.PORT) : 3000
    app.listen(port, err => {
      if (err) console.error(err.stack)
      console.log(`Server started on port ${port}`)
    })
  } catch (e) {
    console.error(e)
  }
})()
