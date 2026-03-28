const { Router } = require('express')
const { body } = require('express-validator')
const { createLead, getLeadById } = require('../controllers/lead.controller')

const router = Router()

router.post(
  '/',
  [
    body('institution_name').notEmpty().withMessage('Institution name is required'),
    body('email').optional({ checkFalsy: true }).isEmail().withMessage('Invalid email'),
    body('phone').optional({ checkFalsy: true }).isMobilePhone().withMessage('Invalid phone'),
    body().custom((_, { req }) => {
      if (!req.body.email && !req.body.phone) {
        throw new Error('Provide either email or phone')
      }
      return true
    }),
  ],
  createLead
)

router.get('/:id', getLeadById)

module.exports = router
