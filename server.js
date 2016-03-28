var http = require("http");
var fs = require("fs");

//404 RESPONSE
function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: File not found buddy!");
    response.end();
}

function onRequest(request, response) {
    /*
     console.log("user made a request " + request.url);
     response.writeHead(200, {"Context-Type": "text/plain"});
     response.write("Here is some data");
     response.end();
     */

    if(request.method=='GET' && request.url == '/'){
        response.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }
    else{
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");