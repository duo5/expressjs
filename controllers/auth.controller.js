const db = require("../db")
const md5 = require("md5");

module.exports.login = (req,res) => {
    res.render('login')
}

module.exports.loginRequest = (req,res) => {
    const email = req.body.email
    
    const password = req.body.password

    const student = db.get('students').find({email:email}).value()

    if(!student){
        res.render('login',{
            errors:[
                "Email or password is not validate"
            ],
            values:req.body
        })
        return;
    }

    if(student.password !== md5(password)){
        res.render('login',{
            errors:[
                "Email or password is not validate"
            ],
            values:req.body
        })
        return;
    }

    res.cookie('id',student.id,{ signed: true })
    res.redirect('/student')

}