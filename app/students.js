"use strict"
const express = require('express')
const router = express.Router()
var studentsDB = require('studensDB.json')

router.get('/', function (request, response) {
    response.json({teste: "teste"})
})

module.exports = router