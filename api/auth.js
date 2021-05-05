const express = require('express')
const router = express.Router()

/* GET home page. */
router.post('/login', function (req, res, next) {
  res.send('login end-point')
})

router.post('/registration', function (req, res, next) {
  res.send('registration end-point')
})

module.exports = router
