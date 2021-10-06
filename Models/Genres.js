/** @format */

const mongoose = require('mongoose');

const GenresSchema = mongoose.Schema({
	name: { type: String, required: true },
});

module.exports = mongoose.model('Genres', GenresSchema);
