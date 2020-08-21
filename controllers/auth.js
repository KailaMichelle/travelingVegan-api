const bcrypt = require('bcryptjs');
// Password Hashing
const jwt = require('jsonwebtoken');
// json web token - used to authorize user that is sending requests (not to be confused with authentication that you use to log in) 
const db = require('../models');

const signup = async (req, res) => {
    console.log('register success')
}

const login = async (req, res) => {
    console.log('register success')
}

const verify = async (req, res) => {
    console.log('register success')
}

module.exports = {
    signup,
    login, 
    verify,
};


