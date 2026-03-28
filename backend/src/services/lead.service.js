const { pool } = require('../config/postgres')

async function createLead({ email, phone, institution_name, institution_type, city, loan_book_size }) {
  const result = await pool.query(
    `INSERT INTO leads (email, phone, institution_name, institution_type, city, loan_book_size, status)
     VALUES ($1, $2, $3, $4, $5, $6, 'new')
     RETURNING *`,
    [email || null, phone || null, institution_name, institution_type || null, city || null, loan_book_size || null]
  )
  return result.rows[0]
}

async function getLeadById(id) {
  const result = await pool.query('SELECT * FROM leads WHERE id = $1', [id])
  if (result.rows.length === 0) return null
  return result.rows[0]
}

module.exports = { createLead, getLeadById }
