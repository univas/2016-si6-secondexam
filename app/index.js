require('getmodule');
var express = require('express')
var router = express.Router()

//Controller
const studentController = getmodule('app/controllers/studentController')
var app = express()

router.get('/:id', studentController.findStudentById);

module.exports = router