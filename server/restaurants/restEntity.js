const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	_id : {type : String , required : true},
	restaurantName:String,
	cuisines:String,
	location:String
});
const model = mongoose.model('Restaurant', schema);
module.exports = {
	restaurantModel: model
};
