import express from 'express'
import { healthCheck, detailedHealthCheck } from '../controllers/appController.js'

const appRouter = express.Router()

appRouter.get('/', healthCheck)
appRouter.get('/health', detailedHealthCheck)

export default appRouter

