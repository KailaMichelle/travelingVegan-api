const mongoose = require('mongoose');

console.log('MONGO DB =', process.env.MONGODB_URI);

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/travelingvegan";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

    .then(() => console.log('MongoDB connected succesfully'))
    .catch((err) => console.log(err));

module.exports = {
    User: require('./User'),
    Restaurant: require('./Restaurant'),
    Like: require('./Like'),
}