const jwt = require('jsonwebtoken')
const OtpModel = require('../models/otp.model')

// Generate a 6-digit numeric OTP
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

async function sendOtp(identifier) {
  // Remove any existing OTP for this identifier
  await OtpModel.deleteMany({ identifier })

  const otp = generateOtp()
  await OtpModel.create({ identifier, otp })

  // In production: integrate with SMS/email provider here
  // For now, log to console (mock)
  console.log(`[OTP] ${identifier} → ${otp}`)

  return { message: 'OTP sent successfully' }
}

async function verifyOtp(identifier, otp) {
  const record = await OtpModel.findOne({ identifier }).sort({ createdAt: -1 })

  if (!record) {
    throw new Error('OTP not found or expired')
  }

  if (record.otp !== otp) {
    throw new Error('Invalid OTP')
  }

  // Delete OTP after successful verification (single-use)
  await OtpModel.deleteMany({ identifier })

  const token = jwt.sign(
    { identifier },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  )

  return { token }
}

module.exports = { sendOtp, verifyOtp }
