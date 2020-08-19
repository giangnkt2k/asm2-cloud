module.exports.postCreatep = function(req,res,next){
    var errors =[];
    if(!req.body.txtName){
        errors.push('Name is required');
    }
    if(!req.body.description){
        errors.push('Decription is required')
    }
    if(!req.body.image){
        errors.push('Image is required')
    }
    if(errors.length){
        res.render("../views/products/insert.handlebars",
           {model:errors} 
            
        )
        return;
    }
    next();
}