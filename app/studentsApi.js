"use stritc"
//dependencias
const express = require("express")
const router = express.Router()
const studentsDB = require("./studentsDB.json")

// private
function catchStudents(studentsId) {
    return studentsDB.find(students => students.id === studentsId)
}