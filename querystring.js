var http = require('http')
const { text } = require('stream/consumers')
var url = require('url')

http.createServer(function(req,res){
    res.writeHead(200 , { "Content-Type" : 'text/html' })
    var q =url.parse(req.url, true).query; //here true indicates that node can parse query also and turn it into a object
    var text = q.year + " " + q.month;
    res.end(text) //end is required or else client will keep waiting forever for request
}).listen(8080) //port number 


/*
this is to parse the query and fetch it from url itself and getting data
parsed url is converted into object
{
  query: { year: '2025', month: 'April' },
  pathname: '/',
  search: '?year=2025&month=April',
  ...
}
*/