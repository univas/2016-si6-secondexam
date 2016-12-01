"use strict"

const express = require("express")
const router = express.Router()
const studentDB = require("./studentsDB.json")

function selectStudent(studentID) {
    return studentDB.find(student => student.id === studentID)
}

router.get("/", (request, response) => {
          response.json(studentDB)
})

router.get("/:studentID", (request,response) =>{
    let studentID = request.params.studentID
    let studentData = selectStudent(studentID)
    
    if(studentData){
        response.json(studentData)
    }else{
        response
        .status(400)
        .send("Not Found Student!")
    }
})

module.exports = router