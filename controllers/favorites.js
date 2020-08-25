// const db = require('../models');

// const index = (req, res) => {
//     db.Restaurant.find({}, (err, allRestaurants) => {
//         if(err) console.log('Error in index', err);

//         res.status(200).json(allRestaurants);
//     })
// }

// // const show = (req, res) => {
// //     db.Restaurant.findById(req.params.id, (err, foundRestaurant) => {
// //         if(err) console.log('Error in show', err);

// //         res.status(200).json(foundRestaurant);
// //     })
// // }

// // const create = (req, res) => {
// //     db.FavoriteList.create(req.body, (err, newFavorite) => {
// //         if(err) console.log('Error in favorite create', err);
// //         console.log('newFavorite')
// //     db.User.findById(req.currentUser, (err, foundUser) => {
// //         console.log(err);
// //         foundUser.favoriteRestaurants.push(newFavorite);
// //         foundUser.save((err, savedUser) => {
// //             console.log('savedUser: ', savedUser);
// //         })
// //         res.status(200).json(newFavorite);
// //         })
// //     })
// // }

// // const update = (req, res) => {
// //     db.FavoriteList.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRestaurant) => {
// //         if(err) console.log('Error in update', err);

// //         if (!updatedRestaurant){
// //             res.status(400).json({message: `Could not update ${req.params.id}`})
// //         }

// //         res.json(updatedRestaurant);
// //     })
// // }

// // const destroy = (req, res) => {
// //     db.Restaurant.findByIdAndDelete(req.params.id, (err, deletedRestaurant) => {
// //         if(err) console.log('Error in delete', err);

// //         res.status(200).json(deletedRestaurant);
// //     })
// // }

// module.exports ={
//     index, 
//     // show, 
//     // create,
//     // update,
//     // destroy
// }


