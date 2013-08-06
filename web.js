var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var html_file = fs.readFileSync('index.html');

var html = html_file.toString();

app.get('/', function(request, response) {
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
