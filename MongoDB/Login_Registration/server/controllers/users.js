const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');


module.exports = {
	index(req, res) {
		if (req.session.login) {
			let user = {
				firstname: req.session.userfirst,
				lastname: req.session.userlast
			}
			res.render('login', { user });
		} else {
			res.render('index');
		}
	},
	login(req, res) {
		let errors = [];
		User.findOne({ email: req.body.email }, function(err, user) {
			if (user) {
				user.comparePassword(req.body.password, function(err, isMatch) {
					if (isMatch) {
						req.session.login = true;
						req.session.userfirst = user.firstName
						req.session.userlast = user.lastName
						res.redirect('/')
					}
					else {
						errors.push("Invalid password");
						res.render('index', { errors });
					}
				})
			}
			else {
				errors.push("Email is not in the system");
				res.render('index', { errors });
			}
		})
	},
	register(req, res) {
		let errors = [];

		if (req.body.password != req.body.confirmPassword) {
			errors.push('Password confirmation does not match');
		}
		let user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			birthday: req.body.birthday
		});

		user.save()
			.then(function(user) {
				console.log('user added successful', user);
				res.redirect('/')
			})
			.catch(function(error) {
				console.log(error);
				const err = Object.keys(error.errors).map(function(key) {
					errors.push(error.errors[key].message);
				});
				res.render('index', { errors });
			});
	},
	logout(req, res) {
		req.session.destroy();
		res.redirect('/');
	}
}