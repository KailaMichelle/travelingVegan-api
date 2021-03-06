const db = require('../models');

const index = (req, res) => {
    db.Restaurant.find({}, (err, allRestaurants) => {
        if(err) console.log('Error in index', err);

        res.status(200).json(allRestaurants);
    })
}

const show = (req, res) => {
    db.Restaurant.findById(req.params.id, (err, foundRestaurant) => {
        if(err) console.log('Error in show', err);

        res.status(200).json(foundRestaurant);
    })
}

const create = (req, res) => {
    db.Restaurant.create(req.body, (err, newRestaurant) => {
        if(err) console.log('Error in create', err);
        console.log('newRestaurant')
    db.User.findById(req.currentUser, (err, foundUser) => {
        if(err){
            res.status(401).json({message: 'Not Authorized. Please Login to Continue'});
            console.log(err);
        } else {
            foundUser.restaurants.push(newRestaurant);
            foundUser.save((err, savedUser) => {
                console.log('savedUser: ', savedUser);
            })
            res.status(200).json(newRestaurant);
            }
        })

    })
}

const update = (req, res) => {
    console.log('update route reached')
    db.User.findById(req.currentUser, (err, foundUser) => {
        console.log(req.currentUser)
        if(foundUser.restaurants.includes(req.params.id)){
            console.log('Updating restaurant')
            db.Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRestaurant) => {
                if(err) console.log('Error in update', err);
                    res.status(200).json(updatedRestaurant);
                })
            } else {
                console.log('update error')
                res.status(401).json({message: 'Not Authorized. Please Login to Continue'});
            }
        })
    }

const destroy = (req, res) => {
    db.User.findById(req.currentUser, (err, foundUser) => {
        console.log('imin' , req.currentUser)
        if(foundUser.restaurants.includes(req.params.id)){
            foundUser.restaurants.remove(req.params.id);
            foundUser.save((err, updatedUser) => {
                console.log('updated user=', updatedUser)
            })
            console.log('Deleting restaurant')
            db.Restaurant.findByIdAndDelete(req.params.id, (err, deletedRestaurant) => {
                if(err) console.log('Error in delete', err);
                res.status(200).json(deletedRestaurant);
            })
        } else {
            console.log('delete error')
            res.status(401).json({message: 'Not Authorized. Please Login to Continue'});
        }
    })
}

module.exports ={
    index, 
    show, 
    create,
    update,
    destroy
}


