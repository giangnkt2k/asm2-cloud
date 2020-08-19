const express = require('express')
var router = express.Router();
var controllerl = require('../controllers/login.controller')
var authMiddleWare= require('../middleware/auth,midleware')
var validateL =require('../validate/login.validate')
router.get('/login',controllerl.login);
router.post('/postLogin',validateL.postLogin,controllerl.postLogin);
router.get('/register',controllerl.register);
router.post('/postRegister',controllerl.postRegister);
module.exports = router;
