var express = require('express');
var api = module.exports = express.Router();

api.get('/users/:id', function(req, res, next){
	res.json(req.params);
});



