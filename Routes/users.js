/** @format */

const express = require('express');
const router = express.Router();
const User = require('../Models/Users');

// Get All users
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.json({ message: err.message });
	}
});

// Get specific user
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		res.json(user);
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Create a new user
router.post('/', async (req, res) => {
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		role: req.body.role,
	});
	try {
		const savedUser = await user.save();
		res.json({ savedUser });
	} catch (err) {
		res.json({ message: err.message });
	}
});

// Update the brand
router.patch('/:id', async (req, res) => {
	try {
		const updatedUser = await User.updateOne(
			{ _id: req.params.id },
			{
				$set: {
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					password: req.body.password,
					role: req.body.role,
				},
			},
		);

		res.json(updatedUser);
	} catch (err) {
		res.json({ message: err });
	}
});

// Delete user
router.delete('/:id', async (req, res) => {
	try {
		const removedUser = await User.remove({ _id: req.params.id });
		res.json(removedUser);
	} catch (err) {
		res.json({ message: err.message });
	}
});

module.exports = router;
