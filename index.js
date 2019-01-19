const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)




app.set('view engine', 'pug')

app.set('views', './views')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/',(req,res) => res.render('index',
{name:"duong"}
))
app.get('/student',(req,res) => res.render('student',{
    students:db.get('students').value()
}))

app.get('/student/search',(req,res) => {
    const que = req.query.name
    const matchStudents = db.get('students').value().filter((student) => {
        return student.name.indexOf(que) !== -1;
    })
    res.render('student',{
        students:matchStudents,
        key:que
    })
})
app.get('/student/add',(req,res) => {
    res.render('add');
})
app.post('/student/add',(req,res) => {
    db.get('students').push(req.body).write()
    res.redirect('/student')
})
app.listen(port,() => console.log('listening on port'+port))