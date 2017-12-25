const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Please enter the animal']
	},
	numLegs: {
		type: Number,
		require: [true, 'Animal needs legs']
	}
}, {
	timestamp: true
});

mongoose.model('Animal', animalSchema);
const Animal = mongoose.model('Animal');