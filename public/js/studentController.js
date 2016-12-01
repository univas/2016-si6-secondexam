(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            $("#studentId").val('')
            $('#data').append('<h2>' + student.name + '</p>')
            $("#email").append('<p>'+ student.email +'</p>')
            var media = (student.grades[0] + student.grades[1] + student.grades[2] + student.grades[3])/4
            if(media < 50) {
                $("#status").append('<p> Rerovado </p>')
            }
            else if(media >= 50 & media < 60) {
                $("#status").append('<p> Final </p>')
            }
            else{
                $("#status").append('<p> Aprovado </p>')
            }
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()