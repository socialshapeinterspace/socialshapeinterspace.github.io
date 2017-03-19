var express = require('express');
var app     = express();
var serv    = require('http').Server(app);
var path	= require('path');

var sitePath = process.argv[2] || ".";
var port = 7777;
//Make sure server is cross platform
var gameRoute = path.join(__dirname,'../','client',sitePath);
gameRoute = path.normalize(gameRoute);

//request logging
app.use(function(req, res, next) {
	console.log(req.url);
	next();
});

//start server
console.log(sitePath);
console.log("Starting server in: " + gameRoute);

app.use(express.static(gameRoute));
app.listen(port, function() {
	console.log("Server running at: http://localhost:" + port);
});
