var sys = require('sys');
var exec = require('child_process').exec;
var nodemon = require('nodemon');

exec('mongod --dbpath="./data"', function(error, stdout, stderr) {
	console.log(stderr);
	console.log(error);
	console.log(stdout);

	nodemon({
		script: 'app/server.js',
		ext: 'js'
	});

	nodemon.on('start', function () {
		console.log('App has started');
	}).on('quit', function () {
		console.log('App has quit');
	}).on('restart', function (files) {
		console.log('App restarted due to: ', files);
	});
});



