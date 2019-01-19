
const express = require('express')
const router = express.Router()
const db = require("../db")
const shortid = require('shortid')
router.get('',(req,res) => res.render('student',{
    students:db.get('students').value()
}))

router.get('/search',(req,res) => {
    const que = req.query.name
    const matchStudents = db.get('students').value().filter((student) => {
        return student.name.indexOf(que) !== -1;
    })
    res.render('student',{
        students:matchStudents,
        key:que
    })
})
router.get('/add',(req,res) => {
    res.render('add');
})
router.post('/add',(req,res) => {
    req.body.id = shortid.generate();
    db.get('students').push(req.body).write()
    res.redirect('/student')
})

router.get('/detail/:id',(req,res) => {
    var id = req.params.id;
    console.log(id)
    var students = db.get('students').find({"id":id}).value()
    console.log(students)
    res.render('detail',{
        student:students
    })
})

module.exports = router