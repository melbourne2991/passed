module.exports = function(express) {
	var api = express.Router();

	api.get('/tests', function(req, res, next){
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
			}
		]);
	});

	return api;
}


