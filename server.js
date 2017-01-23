var express = require('express');
var server = express();

server.use(express.static('www'));

server.get('/', function(req, res) {
	res.render('index');
});


var port = process.env.PORT || 3000;
server.listen(port, function() {
	console.log("Server started on port %d", port);
});