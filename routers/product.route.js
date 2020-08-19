var router = require('express').Router();
var engines = require('consolidate')
var controllerp = require('../controllers/product.controller')
var multer = require('multer')
var controllero = require('../controllers/login.controller');
var upload = multer({ dest: './public/uploads/' })
var validateP =require('../validate/product.validate')
var authMiddleWare= require('../middleware/auth,midleware')
router.get('/',authMiddleWare.requireAuth,controllerp.index)
router.get('/insert', controllerp.insert)
router.post('/doInsertt',validateP.postCreatep , controllerp.doInsertt)
router.get('/remove', controllerp.remove)
router.get('/search', controllerp.search)
router.get('/update', controllerp.update)
router.post('/update', upload.single('image'), controllerp.updateP)

module.exports = router;