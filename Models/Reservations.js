/** @format */

const mongoose = require('mongoose');

const ReservationsSchema = mongoose.Schema({
	movieId: { type: String, required: true },
	userId: { type: String, required: true },
	daysNum: { type: String, required: true },
});

module.exports = mongoose.model('Reservations', ReservationsSchema);
