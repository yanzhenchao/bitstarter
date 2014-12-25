
var express = require('express');
var fs = require('fs');
var filename = 'index.html';
var http = require('http');

var app = express();

app.get('/', function(request, response){
    var html = fs.readFileSync(filename).toString();
    response.send(html);
});

app.set('port', (process.env.PORT || 8080))

http.createServer(app).listen(app.get('port'), function(){
    console.log("Listen on " + app.get('port'));
});
