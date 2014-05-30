var express 	= require('express');
var server 		= express();
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var passport	= require('./config/passport');
var api 		= require('./api/app');

mongoose.connect('mongodb://localhost/myapp', function(err) {
	if(err) throw err;
});

server.set('view engine', 'jade');
server.set('views', __dirname + '/views');

server.use(bodyParser()); 
server.use(passport.initialize());

server.use('/api', api(express, passport));

server.get('/', function(req, res) {
	res.render('index');
});

server.get('/partials/:dir/:name', function(req, res) {
	var dir  = req.params.dir;
	var name = req.params.name;
	
	res.render('partials/' + dir + '/' + name);
});

server.use(express.static(__dirname + '/public'));

server.listen(3000);
