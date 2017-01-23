var http = require('http');
var fs = require('fs');

function io(request,response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./call.html',null, function(error,data){
        if(error){
            response.write('file not found');
        }else{
            response.write(data);
        }
        response.end();
    });
}
// http.createServer(io).listen(8080);

var hi =  http.createServer(io);
hi.listen(8080);