const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Please enter a name!']
	}
}, {
	timestamp: true
});

mongoose.model('Person', personSchema);
const Person = mongoose.model('Person');