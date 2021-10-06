/** @format */

const mongoose = require('mongoose');

const PhotosSchema = mongoose.Schema({
	movieId: { type: String, required: true },
	url: { type: String, required: true },
});

module.exports = mongoose.model('Photos', PhotosSchema);
