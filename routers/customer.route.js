const router = require('express').Router();
const engines = require('consolidate');
var controller = require('../controllers/customer.controller');
var validateU =require('../validate/user.validate')
var authMiddleWare= require('../middleware/auth,midleware')
router.get('/',authMiddleWare.requireAuth,controller.index) 
router.get('/insert',controller.insert)
router.post ('/doInsert',validateU.postCreate,controller.doInsert)
router.get('/remove',controller.remove)
router.get('/search',controller.search)
router.get('/update',controller.update)
router.post('/update',controller.updateP)
module.exports = router;
