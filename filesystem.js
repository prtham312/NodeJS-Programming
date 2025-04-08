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

//fs.append data to a file and if file is not present it will create a new file


//-------------------------------------------------------------------------------------------------------------------------------//

// fs.open('mynewfile2.txt' , 'w' , function(err, file){
//     if (err) throw err;
//   console.log('Saved!');
// })


/*has modes like append or read
'r'	Open file for reading. Error if it doesn't exist.
'r+'	Open for reading and writing. Error if it doesn't exist.
'w'	Open file for writing. Create if not exists, truncate if it does.
'w+'	Read + write. Truncate if exists, create if not.
'a'	Open for appending. Create if not exists.
'a+'	Read + append.
*/

//-------------------------------------------------------------------------------------------------------------------------------//

// fs.writeFile('mynewfile2.txt' , 'Hello vernova' ,  function(err){
//     if(err) throw err;
//     console.log("saved");
// })
//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

//-------------------------------------------------------------------------------------------------------------------------------//

fs.unlink('mynewfile2.txt' , function(err){
    if(err) throw err;
    console.log("File Deleted");
})