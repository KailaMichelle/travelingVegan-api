const db = require('../models');

const index = (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if(err) console.log('Error in index', err);

        res.status(200).json(allUsers);
    })
}

const show = (req, res) => {
    db.User.findById(req.params.id).populate({path: 'restaurants'}).exec((err, foundUser) => {
        if (err) return console.log(err);
    res.status(200).json(foundUser);
    })
}

const updateFavorite = async (req, res) => { 
    try {
        const foundFavorite = await db.User.findOne({ favoriteRestaurants: req.body.favoriteRestaurants });
        
        if(foundFavorite){
            res.status(400).json({
                status: 400, 
                message: 'Already added favorite'
            });
        } else {
            db.User.findById(req.params.id, (err, foundUser) => {
                console.log(foundUser)
                    foundUser.favoriteRestaurants.push(req.body.favoriteRestaurants);
                    foundUser.save((err, savedUser) => {
                        console.log('savedUser: ', savedUser, 'updated favorites list');
                    })
            })
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: 'Something went wrong, try again',
        });
}}

const removeFavorite = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        console.log(req.params.id)
        if(foundUser.favoriteRestaurants.includes(req.body.favoriteRestaurants)){
            foundUser.favoriteRestaurants.remove(req.body.favoriteRestaurants);
            foundUser.save((err, updatedUser) => {
                console.log('updated user=', updatedUser)
            })
            console.log('Deleting favorite')
        } else {
            console.log('remove error')
            res.status(401).json({message: 'Not Authorized'});
        }
    })
}

module.exports ={
    index, 
    show, 
    updateFavorite,
    removeFavorite,
}


