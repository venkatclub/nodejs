var http = require('http');
var m1 = require('./module1');
var m2 = require('./module2');

function io(request, response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    m1.m1x();
    response.write(m1.m1varx);
    m2.m2x();
    response.write(m2.m2varx);


    response.end();
}


http.createServer(io).listen(8080);