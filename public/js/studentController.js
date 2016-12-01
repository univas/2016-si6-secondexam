(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            console.log(student)
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
    
    function aluno(){
       
    
    }
})()