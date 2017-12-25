const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

module.exports = {
	showAll: function(request, response) {
		Animal.find()
			.then(function(animals) {
				response.render('index', { animals });
			})
			.catch(function(error) {
				const errors = Object.keys(error.errors).map(function(key) {
					return error.error[key].message;
				});
				console.log(errors);
			});
	},
	showAnimal: function(request, response) {
		Animal.findById(request.params.id)
			.then(function(animal) {
				response.render('oneanimal', { animal });
			});
	},
	showEditAnimal: function(request, response) {
		Animal.findById(request.params.id)
			.then(function(animal) {
				response.render('edit', { animal });
			});
	},
	createAnimal: function(request, response) {
		let animal = new Animal({name: request.body.name, numLegs: request.body.numLegs});
		animal.save()
			.then(function(animal) {
				console.log('add successful', animal);
				response.redirect('/');
			})
			.catch(function(error) {
				const errors = Object.keys(error.errors).map(function(key) {
					return error.errors[key].message;
				});
				console.log(error);
			});
	},
	updateAnimal: function(request, response) {
		Animal.findByIdAndUpdate(request.params.id, { $set: {
			name: request.body.name,
			numLegs: request.body.numLegs
		}})
		.then(function(update) {
			console.log('update successful', update);
			response.redirect('/');
		})
		.catch(function(error) {
			const errors = Object.keys(error.errors).map(function(key) {
				return error.errors[key].message;
			});
			console.log(error);
		});
	},
	killAnimal: function(request, response) {
		Animal.remove({ _id: request.params.id })
		.then(function(del) {
			console.log('delete successful', del);
			response.redirect('/')
		})
		.catch(function(error) {
			const errors = Object.keys(error.errors).map(function(key) {
				return error.errors[key].message;
			});
			console.log(error);
		});
	}
}