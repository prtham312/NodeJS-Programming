    var http = require('http')
    var dt = require('./myFirstModule')
    
    
    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(req.url)
        res.end()
      }).listen(8080);

      /*
      whatever you append in url of server 
      it will display on page 
      In initial it will just show /
      but after appending in url
      http:localhost:8080/summer
      it will show /summer 
       */
