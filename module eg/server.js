var http = require('http');


function io(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
}


http.createServer(io).listen(8080);



// or simply 
// var http = require('http');
// http.createServer(function (request, response){
//     response.writeHead(200,{'Content-Type': 'text/plain'});
//     response.write('Hello World!');
//     response.end();
// });

// http.listen(8080);