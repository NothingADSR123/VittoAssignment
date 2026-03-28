const { Router } = require('express')
const { body } = require('express-validator')
const { sendOtp, verifyOtp } = require('../controllers/auth.controller')

const router = Router()

// At least one of email or phone must be present
const identifierValidation = body().custom((_, { req }) => {
  if (!req.body.email && !req.body.phone) {
    throw new Error('Provide either email or phone')
  }
  return true
})

router.post(
  '/send-otp',
  [
    identifierValidation,
    body('email').optional().isEmail().withMessage('Invalid email address'),
    body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
  ],
  sendOtp
)

router.post(
  '/verify-otp',
  [
    identifierValidation,
    body('otp').isLength({ min: 6, max: 6 }).withMessage('OTP must be 6 digits').isNumeric().withMessage('OTP must be numeric'),
  ],
  verifyOtp
)

module.exports = router
