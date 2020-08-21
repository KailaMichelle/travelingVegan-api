const db = require('../models');

const index = (req, res) => {
    db.Restaurant.find({}, (err, allRestaurants) => {
        if(err) console.log('Error in index', err);

        res.status(200).json(allRestaurants);
    })
}

const show = (req, res) => {
    db.Restaurant.findById({}, (err, foundRestaurant) => {
        if(err) console.log('Error in show', err);

        res.status(200).json(foundRestaurant);
    })
}

const create = (req, res) => {
    db.Restaurant.create(req.params.body, (err, newRestaurant) => {
        if(err) console.log('Error in create', err);

        res.status(200).json(newRestaurant);
    })
}

const update = (req, res) => {
    db.Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRestaurant) => {
        if(err) console.log('Error in update', err);

        if (!updatedRestaurant){
            res.status(400).json({message: `Could not update ${req.params.id}`})
        }

        res.json(foundRestaurant);
    })
}

const destroy = (req, res) => {
    db.Restaurant.findByIdAndDelete(req.params.id, (err, deletedRestaurant) => {
        if(err) console.log('Error in delete', err);

        res.status(200).json(deletedRestaurant);
    })
}

module.exports ={
    index, 
    show, 
    create,
    update,
    destroy
}


