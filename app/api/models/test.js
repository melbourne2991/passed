var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	title: { type: String, required: true },
});

var Listing = mongoose.model(Test, schema);

module.exports = Test;

