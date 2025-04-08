let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer(function(req,res){
    let q = url.parse(req.url , true);
    let fileName = '.' + q.pathname;
    fs.readFile(fileName , function(err , data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
          } 
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          return res.end();
    })
}).listen(8080)


//Here we parsed the url and got it filename and then by using file function we read the file in our local system and showed output on page