const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
  menu: [{ 
    name: String, 
    price: Number, 
    description: String 
  }],
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
