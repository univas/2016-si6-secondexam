"use strict"

// dependencies
const express = require("express");
const router = express.Router();
const studentDB = require("./studentDB.json");

// private
function catchPokemon(studentId) {
    return studentDB.find(student => studentId.id === studentId);
}

//Função de verificação do estudante

//Função para pegar o ID do estudante
function catchStudent(request, response) {
    var studentID = request.query.mat;
    if (studentID) {
        
        //checa ID
        var student = students.find(function(student){
             student.id === studentID; });
             
        //checa SITUACAO
        var student = students.find(function(student){
            student.id === studentID;
            student.situation = checkSituation(student)}); 
        
        if (student) {
            response.send(student);
        } else {
            response.send(student);
        }

//Função que verifica a situação do Aluno
function checkSituation() {
    var note = verifyNote(student);
    if (note < 50) {
        return 'REPROVADO';
    }
    else if (note >=50 && < 60) {
        return 'FINAL';
    }
    else {
        return 'APROVADO';
    }

// public api

router.get("/", (request, response) => {
    response.json(studentDB);
});

router.get("/:studentId", (request, response) => {
   var studenId = request.params.studentId
   var studentData = catchPokemon(studentId);
   if (studentData) {
      response.json(studentData);
   }
   else {
      response.status(404).send("Not Found!")
   }
});

// Exportando o ROUTER
module.exports = router;