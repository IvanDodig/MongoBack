/** @format */

const mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
	genreId: { type: String, required: true },
	name: { type: String, required: true },
	year: { type: String, required: true },
	reservationPrice: { type: String, required: true },
	buyPrice: { type: String, required: true },
});

module.exports = mongoose.model('Movies', MoviesSchema);
