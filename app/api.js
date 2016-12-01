"use strict"

// dependencies
const express = require("express")
const router = express.Router()
const studentsDB = require("./studentsDB.json")

// private
function getStudentById(id) {
    return studentsDB.find(matricula => matricula.id === id)
}

// public api
router.get("/", (request, response) => {
    response.json(studentsDB)
})

router.get("/:matriculaId", (request, response) => {
    let matriculaId = request.params.id
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
//

function media(matriculaId) {
    let notas = getStudentById.grades
    let soma = 0
    array.forEach(function(notas) {
        soma += notas; 
    }, this);
    return soma/4;
}
function situacao(id) {
    let media = media(id)
    if(media >== 60){
        return 'Aprovado'
    }else if(media >==50 && media < 60){
        return'Final'
    }else {
        return'Reprovado'
    }
}


// export router
module.exports = router