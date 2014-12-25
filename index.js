var express = require('express');
var fs = require('fs');
var filename = 'index.html';
var http = require('http');

var app = express();

app.get('/', function(request, response){
    var html = fs.readFileSync(filename).toString();
    response.send(html);
});

var port = process.env.PORT || 8080;

http.createServer(app).listen(port, function(){
    console.log("Listen on " + port);
});


// The new one

/*

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var html = fs.readFileSync(filename).toString();
    response.send(html);
});

app.listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});

*/
// The old one



