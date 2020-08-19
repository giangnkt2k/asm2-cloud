var mongodb =require('mongodb')
var MongoClient = mongodb.MongoClient;
var url = "mongodb+srv://anhyeuem:emyeuanh@cluster0.n77lw.mongodb.net/test";
var multer =require('multer');

exports.insert= function(req,res){
  
    res.render("../views/products/insert");
}
exports.index=async(req,res)=>{
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    let result= await dbo.collection("Product").find({}).toArray();
    res.render('products/index',{model:result});
    
}
exports.doInsertt= async (req,res)=>{
 
    let inputName = req.body.txtName;
    let inputDecription=req.body.description;
    let images = req.body.image;
  
    //let uImage=image
    let newProduct = { name: inputName, description: inputDecription,image:images };

    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    await dbo.collection('Product').insertOne(newProduct);
   
    res.redirect('/products');
}
exports.remove = async(req,res)=> {
    let id = req.query.id;
    var ObjectID = mongodb.ObjectID;
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    await dbo.collection("Product").deleteOne({ _id: ObjectID(id) });
    res.redirect('/products');
}
exports.search =async(req, res) => {
    let name = req.query.name;
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    let find=await dbo.collection("Product").find({ name:new RegExp("^"+name ,'i') }).toArray();
    res.render('products',{model:find});
}
exports.update = async (req,res)=>{
    let id=req.query.id;
    var ObjectID = mongodb.ObjectID;
    let client = await MongoClient.connect(url);
    let dbo = client.db('StudentDB');
    let user =await dbo.collection("Product").find({_id:ObjectID(id.toString())}).toArray();
    console.log(user);
   res.render('products/update',{model:user});
};
exports.updateP =async (req,res)=>{
    let id=req.body.txtid;
    let iName = req.body.txtName;
    let idescription = req.body.description;
    var ObjectID = mongodb.ObjectID;
    let client = await MongoClient.connect(url);
    let dbo  = client.db('StudentDB');
    let user =await dbo.collection("Product").find({_id:ObjectID(id.toString())}).toArray();
    let t= await dbo.collection("Product").
                        updateOne({ "_id":ObjectID(id.toString())},
                        {$set:{name:iName.toString(),description:idescription.toString()}})
    console.log(t);    

    res.redirect('/products');
};