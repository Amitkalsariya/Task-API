var express = require('express');
var taskrouter = express.Router();
const controller=require('./controller')
/* GET home page. */
taskrouter.get('/tasks', controller.all_task);
taskrouter.post('/tasks/add', controller.add_task);

module.exports = taskrouter;
