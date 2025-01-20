var express = require('express');
var router = express.Router();
const controller=require('./controller')
/* GET home page. */
router.get('/', controller.All_user);

module.exports = router;
