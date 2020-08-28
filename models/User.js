const mongoose = require('mongoose');
const Restaurant = require('./Restaurant');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
    },
    password: {
        type: String,
        minlength: 4, 
        required: [true, 'Password is required'],
    },
    restaurants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }],
    favoriteRestaurants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }],
    createdAt: {
        type: Date, 
        default: Date.now,
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;