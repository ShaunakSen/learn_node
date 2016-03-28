/**
 * Created by shaunak on 29/3/16.
 */

var connect = require("connect");
var http = require("http");

var app = connect();

function profile(request, response){
    console.log("user requested his profile")
}

function forum(request, response){
    console.log("user requested his forum")
}

app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8888);
console.log("Server is now running...");
