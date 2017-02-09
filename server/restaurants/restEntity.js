const mongoose = require('mongoose');

const schema = new mongoose.Schema({

	img:String,
	name:String,
	address:String,
	cuisines:String,
	ratings:String
});
const model = mongoose.model('Restaurant', schema);
module.exports = {
	restaurantModel: model
};
