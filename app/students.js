"use strict"
const express = require('express')
const router = express.Router()
var studentsDB = require('./studentsDB.json')

function findStudent(studentId) {
    return studentsDB.find(student => student.id == studentId)
}

function calculateAvarageGrades(grades) {
    let result = 0
    grades.forEach(function (grade) {
        result = result + grade
    })
    result = result/grades.length
    return result.toFixed(2)
}

function checkStudentStatus(avarageGrade) {
    if(avarageGrade < 50) return 'Reproved'
    if(avarageGrade < 60) return 'Final'
    return 'Approved'
}

router
    .get('/', function (request, response) {
        response.json(studentsDB)
    })
    .get('/:id', function (request, response) {
        let requestId = request.params.id
        let findedStudent = findStudent(requestId)
        if(findedStudent){
            findedStudent.status = checkStudentStatus(calculateAvarageGrades(findedStudent.grades))
            response.json(findedStudent)
        } else {
            response.json({error: 'Student not found!'})
        }
    })


module.exports = router