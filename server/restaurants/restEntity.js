let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/* restaurant schema */
let restaurantSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
      type: String,
      required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
      type: String,
      required: true
  },
  comments: {
      type: String,
      default: ''
  }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
