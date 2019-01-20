const express = require('express')

const bodyParser = require('body-parser')

const cookieParser = require('cookie-parser')

const authLogin = require('./middlewares/auth.middleware')

const port = 3000

const studentRoute = require('./routes/student.route')

const authRoute = require('./routes/auth.route')

const app = express()

app.set('view engine', 'pug')

app.set('views', './views')

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cookieParser())

app.get('/',(req,res) => res.render('index',
{name:"duong"}
))

app.use('/student',authLogin.authentication, studentRoute)

app.use('/auth',authRoute)

app.use(express.static('public'))

app.listen(port,() => console.log('listening on port'+port))