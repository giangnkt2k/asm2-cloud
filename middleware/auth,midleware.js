var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://anhyeuem:emyeuanh@cluster0.n77lw.mongodb.net/test";

module.exports.requireAuth =function(req,res,next){
    if(!req.cookies.idUser){
        
        res.redirect('/auth/login');
        return;
    }
    
    next();
}