/** @format */

const express = require('express');
const router = express.Router();
const Movie = require('../Models/Movies');

// Get All movies
router.get('/', async (req, res) => {
	try {
		const movies = await Movie.find();
		res.json(movies);
	} catch (error) {
		res.json({ message: err.message });
	}
});

// Get specific movie
router.get('/:id', async (req, res) => {
	try {
		const movie = await Movie.findById(req.params.id);
		res.json(movie);
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Create new movie
router.post('/', async (req, res) => {
	const movie = new Movie({
		genreId: req.body.genreId,
		name: req.body.name,
		year: req.body.year,
		reservationPrice: req.body.reservationPrice,
		buyPrice: req.body.buyPrice,
	});
	try {
		const savedMovie = await movie.save();
		res.json({ savedMovie });
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Update the movie
router.patch('/:id', async (req, res) => {
	try {
		const updatedMovie = await Movie.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					genreId: req.body.genreId,
					name: req.body.name,
					year: req.body.year,
					reservationPrice: req.body.reservationPrice,
					buyPrice: req.body.buyPrice,
				},
			},
		);

		res.json(updatedMovie);
	} catch (err) {
		res.json({ message: err });
	}
});

// Delete movie
router.delete('/:id', async (req, res) => {
	try {
		const removedMovie = await Movie.remove({ _id: req.params.id });
		res.json(removedMovie);
	} catch (err) {
		res.json({ message: err.message });
	}
});

module.exports = router;
