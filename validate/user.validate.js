module.exports.postCreate = function(req,res,next){
    var errors =[];
    if(!req.body.txtName){
        errors.push('Name is required');
    }
    if(!req.body.txtEmail){
        errors.push('Email is required')
    }
    if(!req.body.txtPhone){
        errors.push('Phone number is required')
    }
    if(errors.length){
        res.render("../views/insert.handlebars",
           {model:errors} 
            
        )
        return;
    }
    next();
}