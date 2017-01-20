(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "api/student/" + id
        })
        .done(student => {
            document.getElementById('student-name').innerHTML = student.name
            document.getElementById('email').innerHTML = student.email
            document.getElementById('photo').src = student.photo
            document.getElementById('status').innerHTML = student.situation
        });
    }

    $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()