var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demo1.html' , function(err , data){
        if(err){
            res.writeHead(404 , {"content-type" : 'text/plain'})
            res.write("Error 404 not found")
        }
        res.writeHead(200 , {"content-type" : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080)