"use strict"

const express = require("express")
const router = express.Router()
const studentDB = require("./studentsDB.json")

function selectStudent(studentID) {
    return studentDB.find(student => student.id === studentID)
}

router.get("/", (request, response) => {
          
})