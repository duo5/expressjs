const db = require("../db")

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

    if(student.password !== password){
        res.render('login',{
            errors:[
                "Email or password is not validate"
            ],
            values:req.body
        })
        return;
    }

    res.cookie('id',student.id)
    res.redirect('/student')

}