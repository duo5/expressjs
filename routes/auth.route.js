const express = require('express')

const router = express.Router()

const controller = require('../controllers/auth.controller')

router.get('/login', controller.login)

router.post('/loginRequest',controller.loginRequest)

module.exports = router