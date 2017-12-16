const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(request, response) {
	response.render('index');
});

app.post('/result', function(request, response) {
	const context = {
		name: request.body.name,
		dojoLoc: request.body.dojo_loc,
		language: request.body.languages,
		comment: request.body.comment
	}
	response.render('result', { context });
});



app.listen(port, () => console.log(`express server listening on port ${ port }`));