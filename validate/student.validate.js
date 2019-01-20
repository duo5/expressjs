module.exports.addPost = (req,res,next) =>{
    const errors = []
    if(!req.body.name){
        errors.push("name is require")
    }
    if(!req.body.phone){
        errors.push("phone is require")
    }
    if(errors.length){
        res.render('add',{
            errors:errors
        })
        return;
    }
    next();
}