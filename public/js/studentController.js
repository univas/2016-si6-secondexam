(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(student => {
            $("#name").html(student.name)
            $("#email").html(student.email)
            $("#photo").html(student.photo)
            $("#status").html(student.status)
        }).fail(function (error) {
            alert(error.responseText)
        })
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()