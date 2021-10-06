/** @format */

const mongoose = require('mongoose');

const CommentsSchema = mongoose.Schema({
	movieId: { type: String, required: true },
	text: { type: String, required: true },
	review: { type: String, required: true },
});

module.exports = mongoose.model('Comments', CommentsSchema);
