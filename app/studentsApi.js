"use strict"

const express = require("express")
const router = express.Router()
const studentDB = require("./studentsDB.json")

function getStudentById(id) {
    return studentDB.find(student => student.id === id)
}

router.get("/", (request, response) => {
          response.json(studentDB)
})

router.get("/:studentID", (request,response) =>{
    let id = request.params.studentID
    let studentData = getStudentById(id)
    
    if(studentData){
        response.json(studentData)
    }else{
        response
        .status(400)
        .send("Not Found Student!")
       
    }
})

module.exports = router