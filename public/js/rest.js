"use strict"

const express = require("express")
const router = express.Router()
const studentsDB = require("./studentsDB.json")



function getStudent(studentId){
    return studentsDB.find(student =>student.id === studentId)
    
}


router.get("/",(request,response)=> {
    response.jason(studentsDB)
})


function getAverage (grades){
    var total = 0
    
   for (var i = 0; i <grades.lenght;i++ ){
        total += grades[i]
        
   }
    var average = total /grades.length
}

function getStatus (average){
    
    if(average >= 60){
        console.log("Status:Approved")
    }
    else if(average >= 50 && average< 60){
        console.log("Status:End")
    }
    else{       
        console.log("Status:Disapproved")
    }
}

module.exports = router
