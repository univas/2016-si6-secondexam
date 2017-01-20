(function () {
    "use strict"

    function getStudentById(id) {
        $.ajax({
            method: "GET",
            url: "/api/students/" + id
        })
        .done(function onResponse(student) {
            $("#studentNumber").val('')
            $(document.body)
            .append('<img src="studentsDB/http://lorempixel.com/128/128/people' + student.name +  + student.nameemail + student.status + '">');
        });
    }
            
     $("form").on("submit", event => {
        let id = $("#studentId").val()
        getStudentById(id)
        return false
    })
    
})()