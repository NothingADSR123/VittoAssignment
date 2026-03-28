const { validationResult } = require('express-validator')
const leadService = require('../services/lead.service')

async function createLead(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg })
  }

  try {
    const lead = await leadService.createLead(req.body)
    res.status(201).json(lead)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

async function getLeadById(req, res) {
  const { id } = req.params
  if (isNaN(parseInt(id))) {
    return res.status(400).json({ message: 'Invalid lead ID' })
  }

  try {
    const lead = await leadService.getLeadById(parseInt(id))
    if (!lead) return res.status(404).json({ message: 'Lead not found' })
    res.json(lead)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { createLead, getLeadById }
