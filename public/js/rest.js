"use strict"

function getAverage (grades){
    var total = 0
    
   for (var i = 0; i <grades.lenght;i++ ){
        total += grades[i]
        
   }
    var average = total /grades.length;
}

function getStatus (average){
    
    if(average >=60){
        console.log("Status:Approved");
    }
    else if(average >50 && average< 60){
        console.log("Status:End")
    }
    else{       
        console.log("Status:Disapproved")
    }
}