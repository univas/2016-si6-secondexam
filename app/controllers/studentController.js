var studentController = {

   model: getmodule('app/models/studentModel'),
   
   findStudentById: function(req, res){
       var id = req.params.id
       var student = studentController.model.findById(id)
       
       student.situation = studentController.calculateFinalSituation(student.grades)
       
       res.json(student)
   },
   
   calculateFinalSituation: function(grades){
        var average = grades.reduce(function(a,b){
            return a + b;
        });
        
        console.log(average)
        console.log(grades.length)
        average = average / grades.length;
        
        console.log(average)
        
        if(average < 50) return "Not Approved"
        if(average < 60) return "Final"
        return "Approved"
    }
       
};

module.exports = studentController