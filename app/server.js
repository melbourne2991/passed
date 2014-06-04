var express 		= require('express');
var server 			= express();
var cookieParser 	= require('cookie-parser');
var bodyParser  	= require('body-parser');
var session			= require('express-session')
var mongoose 		= require('mongoose');
var passport		= require('./config/passport');
var api 			= require('./api/app');

mongoose.connect('mongodb://localhost/myapp', function(err) {
	if(err) throw err;
});

server.set('view engine', 'jade');
server.set('views', __dirname + '/views');

server.use(cookieParser());
server.use(bodyParser()); 
server.use(session({ secret: '1S0Kx405iU5TbSyal0Gscvsfp8kGX71W' }));
server.use(passport.initialize());
server.use(passport.session());

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
