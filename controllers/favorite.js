// const db = require('../models');



// const index = (req, res) => {
//     db.Like.find({}, (err, allFavorites) => {
//         if(err) console.log('Error in index', err);

//         res.status(200).json(allFavorites);
//     })
// }


// const create = async (req, res) => {
//     try {
//         const foundFavorite = await db.Like.findOne({ email: req.body.email });

//         if(foundFavorite){
//             res.status(400).json({
//                 status: 400,
//                 message: 'Email Address already in use'
//             });
//         }

//     db.Like.create(req.body, (err, newFavorite) => {
//         // foundUser.restaurants.push(newRestaurant);
//         // foundUser.save((err, savedUser) => {
//         //     console.log('savedUser: ', savedUser);
//         // })
//         if(err) console.log('Error in favorite create', err);

//         console.log('newFavorite created')
//     })
//         res.status(200).json(newFavorite);
// }





// module.exports ={
//     index,
//     create,
// }


