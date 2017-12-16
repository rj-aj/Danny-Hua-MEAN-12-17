const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const session = require('express-session')({
	secret: "secrettext",
	resave: true,
	saveUninitialized: true
});
const sharedSession = require('express-socket.io-session');
const app = express();

let users = [];
let messages = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session);

app.get('/', function(request, response) {
	response.render('index');
});

var server = app.listen(port, function() {
	console.log(`listening on port ${ port }`);
});

var io = require('socket.io')(server);

io.use(sharedSession(session, {
	autoSave: true
}));

io.sockets.on('connection', function(socket) {
	console.log('client/socket is connected!');
	console.log('client/socket id is: ', socket.id);
	socket.on('userJoin', function(data){
		const message = 'entered the chat';
		socket.handshake.session.name = data.username;

		let user = {
			name: socket.handshake.session.name,
			id: socket.handshake.session.id
		};

		let chat = {
			name: data.username,
			message: message
		}
		users.push(user);
		messages.push(chat);

		io.emit('loadMessage', {messagelog: messages});
	});
	socket.on('message', function(data) {
		let chat = {
			name: data.name,
			message: data.message
		}
		messages.push(chat);
		// console.log(messages);
		io.emit('messageLog', {messagelog: chat});
	})
});