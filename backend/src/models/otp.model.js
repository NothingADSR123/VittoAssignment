const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
  identifier: { type: String, required: true }, // email or phone
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 }, // TTL: 10 minutes
})

// Compound index to quickly find OTP by identifier
otpSchema.index({ identifier: 1 })

module.exports = mongoose.model('Otp', otpSchema)
