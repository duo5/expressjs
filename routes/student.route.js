
const multer = require('multer')

const upload = multer({dest:'./public/uploads/'})

const express = require('express')

const router = express.Router()

const controller = require('../controllers/student.controller')
const validate = require('../validate/student.validate')
const auth = require('../middlewares/auth.middleware')

router.get('',auth.authentication, controller.renderStudent)

router.get('/search', controller.search)

router.get('/add', controller.add)

router.post('/add', upload.single('file'), validate.addPost, controller.addPost)

router.get('/detail/:id', controller.detailStudent)

router.get('/remove/:id', controller.removeStudent)

router.get('/update/:id',controller.updateStudent)

router.post('/update/:id',controller.updateStudentPost)

module.exports = router