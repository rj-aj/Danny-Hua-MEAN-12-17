const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

let count = 0;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(request, response) {
	response.render('index');
})

var server = app.listen(port, function() {
	console.log(`listening on port ${ port }`);
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
	console.log('client/socket is connected!');
	console.log('client/socket id is: ', socket.id);
	socket.on('pushButton', function() {
		count++;
		console.log(count);
		socket.emit('counter', {counter: count});
	});
	socket.on('countReset', function() {
		count = 0;
		console.log(count);
		socket.emit('counter', {counter: count});
	})
})