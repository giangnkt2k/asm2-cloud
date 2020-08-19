var cookieParser = require('cookie-parser')
var http = require('http');
const express = require('express');
const engines = require('consolidate');
const app = express();
const expbs =require('express-handlebars');
//const port = 8888
const session = require('express-session')
var err = 'err';
var bodyParser = require("body-parser");
var loginRouter =require("./routers/login.route");
var customerRouter = require("./routers/customer.route");
var productRouter =require("./routers/product.route");
var homeRouter =require("./routers/home.router");

//const { userInfo } = require('os');
app.use(cookieParser())
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret :'anhyeuem',
    cookie:{maxAge:60000}
}))
app.use(bodyParser.urlencoded({ extended: false }));

var publicDir = require('path').join(__dirname, 'public');
app.use(express.static(publicDir));
app.engine('handlebars', expbs({defaultLayout:'main'}));
//app.set('views', './views');
app.set('view engine', 'handlebars');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://anhyeuem:emyeuanh@cluster0.n77lw.mongodb.net/test";
app.use("/users",customerRouter)
app.use("/products",productRouter)
app.use("/auth",loginRouter)
app.use('/',homeRouter)
//app.listen(port, () => console.log(`Example app listening at http://localhost:${8888}`))
var PORT = process.env.PORT || 8888;
app.listen(PORT);
