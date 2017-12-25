const animals = require('../controllers/animals.js')
module.exports = function(app) {
	app.get('/', function(request, response) {
		animals.showAll(request, response);
	});

	app.get('/mongooses/new', function(request, response) {
		response.render('new');
	});

	app.get('/mongooses/:id', function(request, response) {
		animals.showAnimal(request, response);
	});

	app.get('/mongooses/edit/:id', function(request, response) {
		animals.showEditAnimal(request, response);
	})

	app.post('/mongooses', function(request, response) {
		animals.createAnimal(request, response);
	});

	app.post('/mongooses/:id', function(request, response) {
		animals.updateAnimal(request, response);
	});

	app.post('/mongooses/destroy/:id', function(request, response) {
		animals.killAnimal(request, response);
	});
}