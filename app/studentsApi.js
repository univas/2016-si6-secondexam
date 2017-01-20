"use stritc"
//dependencias

const express = require("express")
const router = express.Router()
const studentsDB = require("./studentsDB.json")


function catchStudents(studentsId) {
    return studentsDB.find(students => students.id === studentsId)
}

router.any("/", (request, response) => {
    response.json(studentsDB)
})

router.any("/:studentsId", (request, response) => {
    let studentsId = request.params.studentsId
  
})

module.exports = router

