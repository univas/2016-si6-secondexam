"use strict"

// dependencies
const express = require("express")
const router = express.Router()
const studentsDB = require("./stusentsDB.json")

// private
function getStudentById(id) {
    return studentsDB.find(matricula => matricula.id === id)
}

// public api
router.get("/", (request, response) => {
    response.json(studentsDB)
})

router.get("/:matriculaId", (request, response) => {
    let matriculaId = request.params.pokeId
    let studentData = getStudentById(matriculaId)
    
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