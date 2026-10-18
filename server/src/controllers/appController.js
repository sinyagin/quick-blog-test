import mongoose from 'mongoose'

export const healthCheck = (req, res) => {
  res.json({
    success: true,
    message: 'API is Working',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
}

const DB_STATES = ['disconnected', 'connected', 'connecting', 'disconnecting']

export const detailedHealthCheck = (req, res) => {
  const dbState = DB_STATES[mongoose.connection.readyState] || 'unknown'
  const isHealthy = dbState === 'connected'

  res.status(isHealthy ? 200 : 503).json({
    success: isHealthy,
    status: isHealthy ? 'ok' : 'degraded',
    database: dbState,
    uptime: Math.round(process.uptime()),
    timestamp: new Date().toISOString()
  })
}

