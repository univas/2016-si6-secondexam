"use strict"
const express = require('express')
const router = express.Router()
var studentsDB = require('./studentsDB.json')

function findStudent(studentId) {
    return studentsDB.find(student => student.id == studentId)
}

router
    .get('/', function (request, response) {
        response.json(studentsDB)
    })
    .get('/:id', function (request, response) {
        let requestId = request.params.id
        let findedStudent = findStudent(requestId)
        if(findedStudent){
            response.json(findedStudent)
        } else {
            response.json({error: 'Student not found!'})
        }
    })


module.exports = router