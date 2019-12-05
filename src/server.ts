import express from 'express'
import path from 'path'
import Enforcer from '../../openapi-enforcer-middleware'

(async () => {
  const app = express()
  app.use(express.json())

  const controllerDir = path.resolve(__dirname, 'src/controllers')
  const mockDir = path.resolve(__dirname, 'src/mocks')
  const oasPath = path.resolve(__dirname, 'api.yaml')

  const enforcer = new Enforcer(oasPath)
  await enforcer.promise.catch(console.error)

  enforcer.mocks(mockDir, false)

})()
