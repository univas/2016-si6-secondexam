"use strict"

const express = require("express")
const router = express.Router()

const studentDB = require("./studentsDB.json")

function searchStudent(studentId) {
    return studentDB.find(student => student.id === studentId)
}

router.get("/", function(request, response) {
    response.json(studentDB)
})

router.get("/:studentID", function(request, response) {
    var studenID = request.params.studentID
    var studentData = searchStudent(studenID)
    
    if(studentData) {
        response.json(studentData)
    }
    else {
        response.status(404).send("Not found")
    }
    
})

module.exports = router


