const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();

mongoose.connect('mongodb://localhost/mongoose_dashboard');
mongoose.connection.on('connected', () => console.log('connected to database'));

mongoose.Promise = global.Promise;

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(request, response) {
	Animal.find()
		.then(function(animals) {
			response.render('index', { animals });
		})
		.catch(function(error) {
			const errors = Object.keys(error.errors).map(function(key) {
				return error.error[key].message;
			});
			console.log(errors);
		})
});

app.get('/mongooses/new', function(request, response) {
	response.render('new');
});

app.get('/mongooses/:id', function(request, response) {
	Animal.findById(request.params.id)
		.then(function(animal) {
			response.render('oneanimal', { animal });
		})
});

app.get('/mongooses/edit/:id', function(request, response) {
	Animal.findById(request.params.id)
		.then(function(animal) {
			response.render('edit', { animal });
		})
})

app.post('/mongooses', function(request, response) {
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
});

app.post('/mongooses/:id', function(request, response) {
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
});

app.post('/mongooses/destroy/:id', function(request, response) {
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
})

app.listen(port, () => console.log(`listening on port ${ port }`));