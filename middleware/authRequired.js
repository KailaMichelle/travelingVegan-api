const jwt = require('jsonwebtoken');

const authRequired = (req, res, next) => {
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
        next();
});
}

module.exports = authRequired;