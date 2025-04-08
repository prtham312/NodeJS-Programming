// var http = require('http');
var fs = require('fs');

// http.createServer(function(req,res){
//     // fs.readFile('demo1.html' , function(err , data){
//     //     if(err){
//     //         res.writeHead(404 , {"content-type" : 'text/plain'})
//     //         res.write("Error 404 not found")
//     //     }
//     //     res.writeHead(200 , {"content-type" : 'text/html'});
//     //     res.write(data);
//     //     return res.end();
//     // });
// }).listen(8080)

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

/* 
will throw an error if file not found
fs.append data to a file and if file is not present it will create a new file
*/