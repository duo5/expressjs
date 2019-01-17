const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
app.get('/',(req,res) => res.render('index',{name:"duong"}))
app.get('/student',(req,res) => res.render('student',{
    students:[
        {name:"duong"},
        {name:"bac"}
    ]
}))
app.listen(port,() => console.log('listening on port'+port))