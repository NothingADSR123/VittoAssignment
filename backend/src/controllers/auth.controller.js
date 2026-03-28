const { validationResult } = require('express-validator')
const authService = require('../services/auth.service')

async function sendOtp(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg })
  }

  const identifier = req.body.email || req.body.phone
  try {
    const result = await authService.sendOtp(identifier)
    res.json(result)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function verifyOtp(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg })
  }

  const identifier = req.body.email || req.body.phone
  const { otp } = req.body

  try {
    const result = await authService.verifyOtp(identifier, otp)
    res.json(result)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = { sendOtp, verifyOtp }
