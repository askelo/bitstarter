var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require("fs");
  var inFile = "index.html";
  var buffer = new Buffer(fs.readFileSync(inFile));
  var outString = buffer.toString('utf-8');
  response.send(outString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
