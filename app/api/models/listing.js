var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	passing: { type: Number },
	failing: { type: Number },
	language: { type: String, required: true },
	framework: { type: String, required: true },
	parent_app: { type: String }
});

var Listing = mongoose.model('Listing', schema);

module.exports = Listing;

