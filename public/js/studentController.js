(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            $('#nome').text(student.name);
            $('#email').text(student.email);
            $("#photo").attr("src",student.photo);
            
            $('#status').text(calculaSituacao(student));
         
            
            console.log(student)
           
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        //alert("Merda")
        return false
    })
    
})()

function calculaSituacao(student){
    //alert(student.grades[0]);
    //return "retornou algo";
    let result = 0;
    for(i = 0; i < 4; i++){
        result += student.grades[i];
    }
        result /= 4;
        
        if (result >= 60) return "Aprovado";
        else if (result >=50) return "Final";
        else return "Reprovado";
    
       
}