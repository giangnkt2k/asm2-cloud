var mongodb =require('mongodb')
var MongoClient = mongodb.MongoClient;
var url = "mongodb+srv://anhyeuem:emyeuanh@cluster0.n77lw.mongodb.net/test";
exports.insert= function(req,res){
    
    res.render("../views/users/insert.handlebars");
}
exports.doInsert= async (req,res)=>{
 
        let inputName = req.body.txtName;
        let inputEmail = req.body.txtEmail;
        let inputPhone =req.body.txtPhone;
        let newCustomer = { name: inputName, email: inputEmail ,phone:inputPhone};
    
        let client = await MongoClient.connect(url);
        let dbo = client.db('StudentDB');
        await dbo.collection('Users').insertOne(newCustomer); 
        res.redirect('/users');
    

}
exports.remove = async(req, res) => {
    let id = req.query.id;
    var ObjectID = mongodb.ObjectID;
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    await dbo.collection("Users").deleteOne({ _id: ObjectID(id) });
    res.redirect('/users');
};
exports.search = async(req, res) => {
    let name = req.query.name;
    
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    
    let find=await dbo.collection("Users").find({name: new RegExp("^"+name,'i')}).toArray();
    res.render('users',{model:find});
};
exports.update = async (req,res)=>{
    let id=req.query.id;
    var ObjectID = mongodb.ObjectID;
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    let user =await dbo.collection("Users").find({_id:ObjectID(id.toString())}).toArray();
    console.log(user);
   res.render('users/update',{model:user});
};
exports.updateP =async (req,res)=>{
    let id=req.body.txtid;
    let iName = req.body.txtName;
    let iEmail = req.body.txtEmail;
    let iPhone =req.body.txtPhone;
  
    
    var ObjectID = mongodb.ObjectID;
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    let user =await dbo.collection("Users").
    find({_id:ObjectID(id.toString())}).toArray();
    let t= await dbo.collection("Users").
    updateOne({ "_id":ObjectID(id.toString())},
                  {$set:{name:iName.toString(),
                       email:iEmail.toString(),
                     phone:iPhone.toString()}})
    console.log(t);    

    res.redirect('/users');
};
exports.index=async(req,res)=>{
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    let result= await dbo.collection("Users").find({}).toArray();
    res.render('users/index',{model:result});
};
