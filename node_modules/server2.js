/**
 * Created by shaunak on 29/3/16.
 */

var connect = require("connect");
var http = require("http");

var app = connect();

function doFirst(request, response, next)
{
    console.log("mini");
    next();
    //next basically calls the next function in the stack middleware.. u can check for user permissions
    //here.. if user is authenticated do next() to execute doSecond()
}
function doSecond(request, response, next)
{
    console.log("shona");
    next();
}

app.use(doFirst);
app.use(doSecond);


http.createServer(app).listen(8888);
console.log("Server is now running...");