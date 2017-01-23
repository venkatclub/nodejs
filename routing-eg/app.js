var fs = require('fs');
var url = require('url');

function renderHtml(path,response){
    fs.readFile(path, null, function(error, data){
        if(error){
            response.write('file not found');
        }else{
            response.write(data);
        }
        response.end();
    });
}


module.exports ={
    e1: function(request, response){
    response.writeHead(200,{'Content-Type':'text/html'});

    var path = url.parse(request.url).pathname;

    switch(path){
        case '/':
        renderHtml('./index.html', response);
        break;
        case '/login':
        renderHtml('./login.html', response);
        break;
        case '/contact':
        renderHtml('./contact.html', response);
        break;
        default:
        // renderHtml('./404.html', response);
        response.write('no page exists');
        response.end();
    }
    
}
};


