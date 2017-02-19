const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	username: {
	        type: String
	    },
	    password: {
	        type: String
	    }
});
const model = mongoose.model('User', schema);
module.exports = {
	userModel: model
};
