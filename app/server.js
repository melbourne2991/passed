var express = require('express');
var server = express();
var api = require('./api/app');

server.set('view engine', 'jade');
server.set('views', __dirname + '/views');
server.use('/api', api);

server.get('/', function(req, res) {
	res.render('index');
});

server.use(express.static(__dirname + '/public'));

server.listen(3000);
