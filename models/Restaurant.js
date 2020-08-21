const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: String,
    location: String,
    fullyVegan: Boolean,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;