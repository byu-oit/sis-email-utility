import express, {Response} from 'express'
import path from 'path'
import Enforcer from 'openapi-enforcer-middleware'
import ByuJwt from 'byu-jwt'
import * as authorize from './auth'

(async (): Promise<void> => {
  try {
    const app = express()
    const controllerDir = path.resolve(__dirname, 'controllers')
    const oasPath = path.resolve(__dirname, 'api.json')

    app.get('/xhealth', (req, res) => res.status(200).send('The force is strong with this one.'))

    app.use((req, res, next) => {
      const now = new Date()
      console.log(`${req.method} called on ${req.originalUrl} at ${now.toLocaleTimeString('en-US', { timeZone: 'America/Denver', timeZoneName: 'short', weekday: 'short', month: 'short', day: 'numeric' })} (${now.toISOString()})`)
      console.log('Query:', req.query)
      console.log('Body:', JSON.stringify(req.body))
      next()
    })

    app.use(express.json())

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
