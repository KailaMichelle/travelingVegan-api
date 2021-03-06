const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: String,
    fullyVegan: Boolean,
    image: String,
    website: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;