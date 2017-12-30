const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const models_path = path.resolve('server', 'models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/login_registration');
mongoose.connection.on('connected', () => console.log('connected to database'));


// const models_path = path.join(__dirname, './../models');

// fs.readdirSync(models_path).forEach(function(file) {
// 	if(file.indexOf('.js') >= 0) {
// 		require(models_path + '/' + file);
// 	}
// })

fs.readdirSync(models_path).forEach(function(file) {
	if (reg.test(file)) {
		require(path.join(models_path, file));
	}
})