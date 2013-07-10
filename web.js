var fs = require('fs');
var infile = "index.html";
var inbuffer = fs.readFileSync(infile);

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(inbuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
