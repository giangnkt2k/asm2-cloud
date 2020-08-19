const express = require('express')
var router = express.Router();
var authMiddleWare= require('../middleware/auth,midleware')
var homeController =require('../controllers/home.controller');
router.get('/',authMiddleWare.requireAuth,homeController.index)

module.exports =router;