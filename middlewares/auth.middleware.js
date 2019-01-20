const db = require("../db")

module.exports.authentication = (req,res,next) => {
    console.log(req.cookies.id)
    if(!req.cookies.id){
        res.redirect('/auth/login')
        return;
    }

    const st = db.get('students').find({id:req.cookies.id}).value()
    console.log(st.name)
    if(!st){
        res.redirect('/auth/login')
        return;
    }

    next()
}