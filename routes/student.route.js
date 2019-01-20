
const express = require('express')

const router = express.Router()

const controller = require('../controllers/student.controller')
const validate = require('../validate/student.validate')
const auth = require('../middlewares/auth.middleware')

router.get('',auth.authentication, controller.renderStudent)

router.get('/search', controller.search)

router.get('/add', controller.add)

router.post('/add', validate.addPost,controller.addPost)

router.get('/detail/:id', controller.detailStudent)

router.get('/remove/:id', controller.removeStudent)

module.exports = router