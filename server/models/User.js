const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
		type: String,
		default: ''
	},
	answer: {
		type: String,
		default: ''
	},
	created: {
		type: Date,
		default: new Date()
	}
});

module.exports = mongoose.model('User', UserSchema);
