const db = require('./models');
const data = require('./restaurantData.json');

db.Restaurant.deleteMany({}, (err, deletedRestaurant) => {
    db.Restaurant.create(data.restaurants, (err, seededRestaurants) => {
        if (err) console.log(err);
        
        console.log(data.restaurants.length, 'restaurants success');
        
        process.exit();
    });
});