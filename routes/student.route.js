
const express = require('express')

const router = express.Router()

const controller = require('../controllers/student.controller')

router.get('', controller.renderStudent)

router.get('/search', controller.search)

router.get('/add', controller.add)

router.post('/add', controller.addPost)

router.get('/detail/:id', controller.detailStudent)

module.exports = router