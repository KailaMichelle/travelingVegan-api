const bcrypt = require('bcryptjs');
// Password Hashing
const jwt = require('jsonwebtoken');
// json web token - used to authorize user that is sending requests (not to be confused with authentication that you use to log in) 
const db = require('../models');

const signup = async (req, res) => {
    // return res.json({message: 'Register route working'})
    if(!req.body.username || !req.body.email || !req.body.password){
        return res.status(400).json({message: 'All fields are required'});
    }

    if(req.body.password.length < 5){
        return res.status(400).json({message: 'Password is too short'})
    }

    try {
        const foundUser = await db.User.findOne({ email: req.body.email });

        if(foundUser){
            res.status(400).json({
                status: 400,
                message: 'Email Address already in use'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        await db.User.create({ ...req.body, password: hash });
        return res.status(201).json({status: 201, message: 'successfully created user'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: 'Something went wrong, try again',
        });
    }
};

const login = async (req, res) => {
    return res.json({message: 'Login route working'})
}

const verify = async (req, res) => {
    return res.json({message: 'Verify route working'})
}


module.exports = {
    signup,
    login, 
    verify,
};


