/** @format */

const express = require('express');
const router = express.Router();
const Reservation = require('../Models/Reservations');

// Get All reservations
router.get('/', async (req, res) => {
	try {
		const reservations = await Reservation.find();
		res.json(reservations);
	} catch (error) {
		res.json({ message: err.message });
	}
});

// Get specific reservation
router.get('/:id', async (req, res) => {
	try {
		const reservation = await Reservation.findById(req.params.id);
		res.json(reservation);
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Create a new reservation
router.post('/', async (req, res) => {
	const reservation = new Reservation({
		movieId: req.body.movieId,
		userId: req.body.userId,
		daysNum: req.body.daysNum,
	});
	try {
		const savedReservation = await reservation.save();
		res.json({ savedReservation });
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Update the brand
router.patch('/:id', async (req, res) => {
	try {
		const updatedReservation = await Reservation.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					movieId: req.body.movieId,
					userId: req.body.userId,
					daysNum: req.body.daysNum,
				},
			},
		);

		res.json(updatedReservation);
	} catch (err) {
		res.json({ message: err });
	}
});

// Delete reservation
router.delete('/:id', async (req, res) => {
	try {
		const removedReservation = await Reservation.remove({ _id: req.params.id });
		res.json(removedReservation);
	} catch (err) {
		res.json({ message: err.message });
	}
});

module.exports = router;
