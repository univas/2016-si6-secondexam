"use strict"

const express = require("express")
const router = express.Router()
const studentsDB = require("./studentsDB.json")


function getStudentById(id) {
    return studentsDB.find(student => student.id === studentId)
}

// public api
router.get("/", (request, response) => {
    response.json(studentsDB)
})

router.get("/:studentId", (request, response) => {
    let studentId = request.params.studentId
    let studentData = getStudentById(id)
    
    if(studentData) {
        response.json(studentData)
    }
    else {
        response
        .status(404)
        .send("Not Found!")
    }
})

// export router
module.exports = router
