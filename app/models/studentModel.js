var studentModel = {
    
    studentsDB: require('../studentsDB.json'),
    
    findById: function(id) {
        return studentModel.studentsDB.find(student => student.id == id);
    }
    
}

module.exports = studentModel