const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const RestaurantSchema = new Schema({
    name: String,
    location: String,
    fullyVegan: Boolean,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;