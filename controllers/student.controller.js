const db = require("../db")
const shortid = require('shortid')

module.exports.renderStudent = (req,res) => res.render('student',{
    students:db.get('students').value()})

module.exports.search = (req,res) => {
    const que = req.query.name
    const matchStudents = db.get('students').value().filter((student) => {
        return student.name.indexOf(que) !== -1;
    })
    res.render('student',{
        students:matchStudents,
        key:que
    })
}

module.exports.add = (req,res) => {
    res.render('add')
}

module.exports.addPost = (req,res) => {
    req.body.id = shortid.generate()
    db.get('students').push(req.body).write()
    res.redirect('/student')
}

module.exports.detailStudent = (req,res) => {
    var id = req.params.id;
    var students = db.get('students').find({"id":id}).value()
    res.render('detail',{
        student:students
    })
} 

module.exports.removeStudent = (req,res) => {
    var id = req.params.id
    db.get('students').remove({"id":id}).write()
    res.redirect('/student')
}

module.exports.updateStudent = (req,res) => {
    var id = req.params.id
    var students = db.get('students').find({id:id}).value()    
    res.render('update',{
        values:students
    })
}

module.exports.updateStudentPost = (req,res) => {
    var id = req.params.id
    var name = req.body.name
    var phone = req.body.phone
    var students = db.get('students').find({id:id}).assign({name:name, phone:phone}).write()
    res.redirect('/student')
}