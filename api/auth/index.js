const express = require('express')
const router = express.Router()

const { bodyValidator } = require('../../utils/validator')
const { login, registration } = require('./handlers')
const { loginSchema, registrationSchema } = require('./schemes')

/* GET home page. */
router.post('/login', [bodyValidator(loginSchema)], login)
router.post('/registration', [bodyValidator(registrationSchema)], registration)

module.exports = router
