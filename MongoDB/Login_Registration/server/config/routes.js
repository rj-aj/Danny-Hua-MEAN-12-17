const users = require('../controllers/users.js');

module.exports = function(app) {
	app.get('/', users.index);
	app.post('/register', users.register);
	app.post('/login', users.login);
	app.get('/logout', users.logout);
}