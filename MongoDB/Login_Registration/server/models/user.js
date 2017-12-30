const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
	firstName: {
		type: String,
		require: [true, 'Please enter your first_name']
	},
	lastName: {
		type: String,
		require: [true, 'Please enter your last_name']
	},
	email: {
		type: String,
		require: [true, 'Please enter your email'],
		index: { unique: [true, 'Email already existed'] },
		validate: {
			validator: function(value) {
				return /@/.test(value);
			},
			message: 'The email you entered is not a valid email address'
		}
	},
	password: {
		type: String,
		require: true,
		minlength: 8,
		validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password needs to be 8 characters. You must have at least 1 number and uppercase character"
        }
	},
	birthday: {
		type: Date,
		require: [true, 'Please enter your birthday']
	}
}, {
	timestamp: true
});

userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);