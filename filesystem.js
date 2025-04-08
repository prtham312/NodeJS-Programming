// var http = require('http');
var fs = require('fs');

//---------------------------------------------------------------------------------------------------------------------------------//

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
 
//--------------------------------------------------------------------------------------------------------------------------------//

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//-------------------------------------------------------------------------------------------------------------------------------//

fs.open('mynewfile2.txt' , 'w' , function(err, file){
    if (err) throw err;
  console.log('Saved!');
})

/*has modes like append or read
'r'	Open file for reading. Error if it doesn't exist.
'r+'	Open for reading and writing. Error if it doesn't exist.
'w'	Open file for writing. Create if not exists, truncate if it does.
'w+'	Read + write. Truncate if exists, create if not.
'a'	Open for appending. Create if not exists.
'a+'	Read + append.
*/


//-------------------------------------------------------------------------------------------------------------------------------//

/* 
will throw an error if file not found
fs.append data to a file and if file is not present it will create a new file
*/