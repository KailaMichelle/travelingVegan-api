const db = require('../models');

const index = (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if(err) console.log('Error in index', err);

        res.status(200).json(allUsers);
    })
}

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if(err) console.log('Error in show', err);

        res.status(200).json(foundUser);
    })
}

const update = (req, res) => {
    db.User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
        if(err) console.log('Error in update', err);

        if (!updatedUser){
            res.status(400).json({message: `Could not update ${req.params.id}`})
        }

        res.json(updatedUser);
    })
}

const destroy = (req, res) => {
    db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if(err) console.log('Error in delete', err);

        res.status(200).json(deletedUser);
    })
}

module.exports ={
    index, 
    show, 
    update,
    destroy
}


