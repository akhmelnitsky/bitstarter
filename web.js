var express = require('express');
var fs = require ('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    //  response.send('Hello World 2!');
    buf = new Buffer;
	buf = fs.readFileSync("index.html");
    var resp = buf.toString;
    response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
