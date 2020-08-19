var md5 = require('md5');
var mongodb=require('mongodb')
var MongoClient = mongodb.MongoClient;
var url = "mongodb+srv://anhyeuem:emyeuanh@cluster0.n77lw.mongodb.net/test";
var session = require('express-session')
exports.login = function (req, res) {
	res.render("auth/login")

}

exports.postLogin = async (req, res) => {

	let email = req.query.email;

	let password = req.query.password;

	//var ObjectID = require('mongoDB').ObjectID;
	let client = await MongoClient.connect(url);
	let dbo = client.db('StudentDB');
	let user = await dbo.collection("User").find({ email: email, password: password }).toArray();

	if (!user) {
		res.render('auth/login', {
			errors: [
				'User does not exist'
			],
			values: req.body
		})
		return;
	}
	// if (email == "admin@gmail.com") {
	// 	req.session.user = {
	// 		email: email,
	// 		role: 'admin'
	// 	}

	// } else {
	// 	req.session.user = {
	// 		name: name,
	// 		role: 'guest'
	// 	}
	// }
	res.cookie('idUser',123456);
	res.redirect('/');

};
exports.register = function (req, res) {
	res.render('auth/register');
}

exports.postRegister = async (req, res) => {
	let inputName = req.body.txtName;
	let inputEmail = req.body.txtEmail;
	let inputPassword = req.body.txtPassword;
	//var ObjectID = require('mongoDB').ObjectID;
	let client = await MongoClient.connect(url);
	let dbo = client.db('StudentDB');
	if (inputName.length < 4) {
		let errorModel = {
			nameError: "name>3 character "
			, emailError: "email not right"
		};
		res.render('register', { model: errorModel })
	} else {
		let data = { name: inputName, email: inputEmail, password: inputPassword };
		await dbo.collection('User').insertOne(data);
		//alert.log("register suucess")
		res.redirect('login')

	}
}