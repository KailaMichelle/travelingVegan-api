const bcrypt = require('bcryptjs');
// Password Hashing
const jwt = require('jsonwebtoken');
// json web token - used to authorize user that is sending requests (not to be confused with authentication that you use to log in) 
const db = require('../models');


// ************************************** SIGN  UP **************************************
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
        
        const currentUser = await db.User.findOne({email: req.body.email})
        // console.log(currentUser);
        const payload = {id: currentUser._id};
        const secret = process.env.JWT_SECRET;
        const expiration = {expiresIn: '1h'};

        const token = await jwt.sign(payload, secret, expiration);
        res.status(200).json({token});

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: 'Something went wrong, try again',
        });
    }
};

// ************************************** LOGIN **************************************
const login = async (req, res) => {
    // return res.json({message: 'Login route working'})
    try {
        const foundUser = await db.User.findOne({ email: req.body.email });
        if(!foundUser) {
            return res.status(400).json({
                status: 400,
                message: 'Username or Password incorrect'
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
        if(!isMatch){
            return res.status(400).json({
                status: 400,
                message: 'Password is incorrect'
            });
        }

        const payload = {id: foundUser._id};
        const secret = process.env.JWT_SECRET;
        const expiration = {expiresIn: '1h'};

        const token = await jwt.sign(payload, secret, expiration);

        res.status(200).json({token});
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: 'Something went wrong, try again',
        });
    }
};

// ************************************** VERIFY **************************************
const verify = async (req, res) => {
    // return res.json({message: 'Verify route working'})
    const token = req.headers['authorization'];
    console.log(req.headers)
    console.log('Verified token', token);

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser) {
            return res.status(401).json({
                message: 'You are not authorized, please login and try again'
            });
        }

        req.currentUser = decodedUser;
        res.status(200).json({user: decodedUser});
    });
};


module.exports = {
    signup,
    login, 
    verify,
};


