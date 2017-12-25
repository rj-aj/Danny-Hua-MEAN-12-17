const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('connected to database'));

mongoose.Promise = global.Promise;

const quoteSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	quote: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});
mongoose.model('Quote', quoteSchema);
const Quote = mongoose.model('Quote');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(request, response) {
	response.render('index');
});

app.post('/quotes', function(request, response) {
	let quote = new Quote({name: request.body.name, quote: request.body.quote});
	quote.save()
		.then(function(q) {
			console.log('add quote successful!', q);
			response.redirect('/toQuotes')
		})
		.catch(function(error) {
			const errors = Object.keys(error.errors).map(function(key) {
				return error.errors[key].message;
			});
			response.render('error', { errors });
		});
});

app.get('/toQuotes', function(request, response) {
	Quote.find()
		.then(function(quotes) {
			console.log(quotes);
			response.render('quotes', { quotes })
		})
		.catch(function(error) {
			const errors = Object.keys(error.errors).map(function(key) {
				return error.errors[key].message;
			});
			response.render('error', { errors });
		});
});

app.listen(port, () => console.log(`listening on port ${ port }`));