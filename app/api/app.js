var Listing = require('./models/listing');
var User 	= require('./models/user');

module.exports = function(express, passport) {
	var api = express.Router();

	api.post('/user', function(req, res, next) {
		var data 			  = req.body;
		var unhashed_password = data.password;

		data.password = User.generateHash(unhashed_password);

		var user = new User(data);

		user.save(function(err) {
			if(err) {
				return handleError(err);
			} else {
				res.send(true);
			}
		});
	});

	api.post('/login', function(req, res, next) {
		passport.authenticate('local', { session: false }, function(err, user, info) {
			if(!user) {
				res.json(info);
			} else {
				res.send(true);
			}

		})(req, res, next);
	});

	api.post('/listing', function(req, res, next) {
		console.log(req.body);

		var listing = new Listing(req.body);

		listing.save(function(err) {
			if(err) {
				return handleError(err);
			} else {
				res.send(true);
			}
		});
	});

	api.get('/listings', function(req, res, next){
		res.json([
			{
				title: 'Render Maps on Click',
				passing: 10,
				failing: 15,
				language: 'Javascript',
				framework: 'AngularJs',
				parent_app: 'James Bond'
			},
			{
				title: 'Exit shopping cart',
				passing: 10,
				failing: 12,
				language: 'Javascript',
				framework: 'EmberJs',
				parent_app: null
			},
			{
				title: 'Exit shopping cart',
				passing: 10,
				failing: 12,
				language: 'Python',
				framework: 'EmberJs',
				parent_app: null
			}
		]);
	});

	api.get('/languages', function(req, res, next){
		res.json([
			{
				name: 'Javascript'
			},
			{
				name: 'Python'
			},
			{
				name: 'Ruby'
			}
		]);
	});

	return api;
}


