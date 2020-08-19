module.exports.postLogin = function(req,res,next){
    var errors =[];
    if(!req.body.email){
        errors.push('Name is required');
    }
    if(!req.body.password){
        errors.push('Password is required')
    }
   
    if(errors.length){
        res.render("../views/auth/login.handlebars",
           {model:errors} 
            
        )
        return;
    }
    next();
}