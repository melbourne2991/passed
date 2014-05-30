var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	email: { type: String },
	username: { type: String },
	password: { type: String },
	roles: { type: Array, default: ['Architect', 'Developer'] } // Developer, Architect, Client
});

var User = mongoose.model('User', schema);

module.exports = User;

