function getStudentById(studentNumber) {
    var http = require('http'), 
        fs = require('fs');
        
    var options = {
        host: 'http://lorempixel.com/128/128/people', 
        port: 80,
        path: '/2016-si6-secondexam/full/' + studentNumber + '.png'
    };

    var request = http.get(options, function(res) {

        if(res.headers['content-type'] != 'image/png') {
            return null;
        }

        var chunks = [];
        res.on('data', function(chunk){
            chunks.push(chunk);
        });

        res.on('end', function(){
            var buffer = Buffer.concat(chunks);
            fs.writeFile('public/students/' + studentNumber + '.png', buffer, function(err) {
                if (err) {
                    console.log("Student #" + studentNumber);
                }
                console.log('Find Student #' + studentNumber);
            });
        });
    });
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

for(var index = 2017001; index < 2017100; index++) {
    var studentNumber = pad(index, 3); 
    getStudentById(studentNumber);
}