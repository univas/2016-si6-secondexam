"use strict"

// dependencies
const express = require("express")
const router = express.Router()
const alunoDB = require("./studentsDB.json")

// private
function procuraAluno(alunoMatricula) {
    //console.log("merda: "+alunoMatricula);
    return alunoDB.find(aluno => aluno.id === alunoMatricula)
}

// public api
router.get("/", (request, response) => {
    response.json(alunoDB)
})

router.get("/:alunoMatricula", (request, response) => {
    let alunoMatricula = request.params.alunoMatricula
    let alunoData = procuraAluno(alunoMatricula)
    
    if(alunoData) {
        response.json(alunoData)
    }
    else {
        response
        .status(404)
        .send("Not Found!")
    }
})



// export router
module.exports = router