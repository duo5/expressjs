const db = require("../db")

module.exports.authentication = (req,res,next) => {
    console.log(req.cookies.id)
    if(!req.signedCookies.id){
        res.redirect('/auth/login')
        return;
    }

    const st = db.get('students').find({id:req.signedCookies.id}).value()
    console.log(st.name)
    if(!st){
        res.redirect('/auth/login')
        return;
    }

    res.locals.user=st
    next()
}