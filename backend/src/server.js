require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { connectMongo } = require('./config/mongo')
const { connectPostgres } = require('./config/postgres')
const authRoutes = require('./routes/auth.routes')
const leadRoutes = require('./routes/lead.routes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/leads', leadRoutes)

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }))

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Internal server error' })
})

async function start() {
  await connectMongo()
  await connectPostgres()
  app.listen(PORT, () => console.log(`Vitto API running on port ${PORT}`))
}

start()
