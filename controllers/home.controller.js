var mongodb =require('mongodb')
var MongoClient = mongodb.MongoClient;
var url = "mongodb+srv://anhyeuem:emyeuanh@cluster0.n77lw.mongodb.net/test";

exports.index = (req,res)=>{

    res.render('home');
}