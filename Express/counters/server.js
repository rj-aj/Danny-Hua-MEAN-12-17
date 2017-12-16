const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

let counter = 1;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/static'));

app.get('/', function(request, response) {
	counter++;
	response.render('index', { counter });
});

app.post('/add2', function(request, response) {
	counter++;
	response.redirect('/');
});

app.post('/reset', function(request, response) {
	counter = 0;
	response.redirect('/');
});


app.listen(port, () => console.log(`express server listening on port ${ port }`));