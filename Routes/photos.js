/** @format */

const express = require('express');
const router = express.Router();
const Photo = require('../Models/Photos');

// Get All photos
router.get('/', async (req, res) => {
	try {
		const photos = await Photo.find();
		res.json(photos);
	} catch (error) {
		res.json({ message: err.message });
	}
});

// Get specific photo
router.get('/:id', async (req, res) => {
	try {
		const photo = await Photo.findById(req.params.id);
		res.json(photo);
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Create a new photo
router.post('/', async (req, res) => {
	const photo = new Photo({
		movieId: req.body.movieId,
		url: req.body.url,
	});
	try {
		const savedPhoto = await photo.save();
		res.json({ savedPhoto });
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Update the brand
router.patch('/:id', async (req, res) => {
	try {
		const updatedPhoto = await Photo.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					movieId: req.body.movieId,
					url: req.body.url,
				},
			},
		);

		res.json(updatedPhoto);
	} catch (err) {
		res.json({ message: err });
	}
});

// Delete photo
router.delete('/:id', async (req, res) => {
	try {
		const removedPhoto = await Photo.remove({ _id: req.params.id });
		res.json(removedPhoto);
	} catch (err) {
		res.json({ message: err.message });
	}
});

module.exports = router;
