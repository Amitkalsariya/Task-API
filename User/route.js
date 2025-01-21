var express = require('express');
var router = express.Router();
const controller=require('./controller')
/* GET home page. */
router.get('/users', controller.all_user);
router.post('/users/adduser', controller.add_user);
router.post('/users/login', controller.check_user);

module.exports = router;
