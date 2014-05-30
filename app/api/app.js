var Listing = require('./models/listing');

module.exports = function(express) {
	var api = express.Router();

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


