"use strict"

const express = require("express")
const router = express.Router()
const studentsDB = require("./studentsDB.json")

function getStudent(studentId) {
    return studentsDB.find(student => student.id === studentId)
}

function getStatus(grades) {
    let total = 0
    grades.forEach(function(grade){
        total += grade
    })
    let average = total / grades.length 
    if (average < 50) return "Reproved" 
    if (average >= 50 && average < 60) return "Final"
    return "Approved"
}

router.get("/:id", (req, res) => {
    let studentId = req.params.id
    let student = getStudent(studentId)
    if (student) {
        let status = getStatus(student.grades)
        student.status = status
        res.send(student)
    } else {
        res.status(404).send("Student not found")
    }
})

module.exports = router