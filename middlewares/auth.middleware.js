const db = require("../db")

module.exports.authentication = (req,res,next) => {
    if(!req.cookies.id){
        res.redirect('/auth/login')
        return;
    }

    const st = db.get('students').find({id:req.cookies.id}).value()
    if(!st){
        res.redirect('/auth/login')
        return;
    }

    next()
}