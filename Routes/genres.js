/** @format */

const express = require('express');
const router = express.Router();
const Genre = require('../Models/Genres');

// Get All genres
router.get('/', async (req, res) => {
	try {
		const genres = await Genre.find();
		res.json(genres);
	} catch (error) {
		res.json({ message: err.message });
	}
});

// Get specific genre
router.get('/:id', async (req, res) => {
	try {
		const genre = await Genre.findById(req.params.id);
		console.log(req.params.id);
		res.json(genre);
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Create a new genre
router.post('/', async (req, res) => {
	const genre = new Genre({
		name: req.body.name,
	});
	try {
		const savedGenre = await genre.save();
		res.json({ savedGenre });
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Update the brand
router.patch('/:id', async (req, res) => {
	try {
		const updatedGenre = await Genre.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					name: req.body.name,
				},
			},
		);

		res.json(updatedGenre);
	} catch (err) {
		res.json({ message: err });
	}
});

// Delete genre
router.delete('/:id', async (req, res) => {
	try {
		const removedGenre = await Genre.remove({ _id: req.params.id });
		res.json(removedGenre);
	} catch (err) {
		res.json({ message: err.message });
	}
});

module.exports = router;
