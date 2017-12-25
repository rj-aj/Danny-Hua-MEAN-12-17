const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express();

mongoose.connect('mongodb://localhost/message_board');
mongoose.connection.on('connected', () => console.log('connected to database'));

mongoose.Promise = global.Promise;

const messageSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Please enter your name!']
	},
	message: {
		type: String,
		require: [true, 'Please enter a message!']
	},
	comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {
	timestamp: true
});

mongoose.model('Message', messageSchema);
const Message = mongoose.model('Message');

const commentSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Please enter your name!']
	},
	comment: {
		type: String,
		require: [true, 'Please enter a comment!']
	},
	message: {
		type: Schema.Types.ObjectId,
		ref: 'Message'
	}
}, {
	timestamp: true
});

mongoose.model('Comment', commentSchema);
const Comment = mongoose.model('Comment');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	Message.find({})
		.populate('comments')
		.then(messages => {
			res.render('index', { messages });
		})
		.catch(error => {
			const errors = Object.keys(error.errors).map(key => error.errors[key].message);
			console.log(errors);
			throw error;
		});
});

app.post('/message', function(req, res) {
	Message.create(req.body)
		.then(message => {
			console.log(message);
			res.redirect('/');
		})
		.catch(error => {
			const errors = Object.keys(error.errors).map(key => error.errors[key].message);
			console.log(errors);
			throw error;
		});
});

app.post('/comment/:id', function(req, res) {
	const messageId = req.params.id;
	Message.findById(messageId, function(error, message) {
		const new_comment = new Comment({ name: req.body.name, comment: req.body.comment });
		new_comment.message = message._id;
		Message.update({ _id: message._id }, { $push: { comments: new_comment }})
			.then(function(update) {
				console.log('update message successful!', update);
			})
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			});
		new_comment.save()
			.then(comment => {
				console.log('save comment successful!', comment);
				res.redirect('/');
			})
			.catch(error => {
				const errors = Object.keys(error.errors).map(key => error.errors[key].message);
				console.log(errors);
				throw error;
			})
	});
});



// 	Comment.create(req.body)
// 	.then(comment => {
// 		console.log(comment);

// 		return Message.findById({ _id: messageId})
// 			.then(message => {
// 				message.comments.push(comment);
// 				return message.save();
// 			})
// 			.then(() => {
// 				res.redirect('/');
// 			});
// 	})
// 	.catch(error => {
// 			const errors = Object.keys(error.errors).map(key => error.errors[key].message);
// 			console.log(errors);
// 			throw error;
// 		});
// })


app.listen(port, () => console.log(`listening on port ${ port }`));