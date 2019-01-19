const express = require('express')

const bodyParser = require('body-parser')

const port = 3000

const studentRoute = require('./routes/student.rout')


const app = express()

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/',(req,res) => res.render('index',
{name:"duong"}
))
app.use('/student',studentRoute)


app.listen(port,() => console.log('listening on port'+port))