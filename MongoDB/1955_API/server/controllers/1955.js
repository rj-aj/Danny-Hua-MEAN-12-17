const mongoose = require('mongoose');
const Person = mongoose.model('Person');

module.exports = {
	showAll: function(req, res) {
		Person.find({})
			.then(people => res.json(people))
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			});
	},
	showOne: function(req, res) {
		Person.findOne(req.params)
			.then(person => {
				res.json(person ? person : "Person does not exist!");
			})
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			});
	},
	create: function(req, res) {
		Person.create(req.params)
			.then(person => res.json(person))
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			});
	},
	destroy: function(req, res) {
		Person.remove(req.params)
			.then(person => res.json(person))
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			});
	}

}