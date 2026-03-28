const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for Supabase
})

async function connectPostgres() {
  try {
    const client = await pool.connect()
    await client.query('SELECT 1') // verify connection
    client.release()
    console.log('Supabase PostgreSQL connected')
  } catch (err) {
    console.error('PostgreSQL connection failed:', err.message)
    process.exit(1)
  }
}

module.exports = { pool, connectPostgres }
