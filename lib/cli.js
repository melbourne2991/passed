var fs 				= require('fs');
var Handlebars 		= require('handlebars');
var templates_path  = '../generators/templates/';
var api_path		= '../app/api/';

Handlebars.registerHelper('tolc', function(options) {
	return options.fn(this).toLowerCase();
});

module.exports = {
	gen: {
		model: function(args) {
			var name 		= args[0];
			var write_path 	= api_path + 'models/' + name.toLowerCase() + '.js';

			fs.readFile(templates_path + 'model.tmpl', 'utf8' ,function(err, data) {
				if(err) throw err;

				var template 	= Handlebars.compile(data);

				var data = {
					name: name
				};

				var compiled = template(data);

				fs.writeFile(write_path, compiled, 'utf8', function(err) {
					if(err) throw err;
					console.log('Generated ' + write_path);
				});
			});
		},
		view: function(args) {
			console.log(args);
		},
		controller: function(args) {
			console.log(args);
		},
		module: function(args) {
			console.log(args);
		}
	}
}