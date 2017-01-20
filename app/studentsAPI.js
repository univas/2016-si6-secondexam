const studentsDB = require('./studentsDB');

var studentsAPI = {
    find: function (id, response) {
        const data = studentsDB.find(student => student.id === id);
        
        if(data) {
            response.status(200).send(data);
        }
        else {
            response.sendStatus(400);
        }
    }
};

module.exports = studentsAPI;