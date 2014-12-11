var express = require('express');
var app = express();
var fs = require('fs'); // new
var filename = 'index.html'; // new

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var html = fs.readFileSync(filename).toString();
    response.send(html);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
