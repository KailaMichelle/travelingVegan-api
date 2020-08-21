// IMPORTS
const express = require ('express');
require('dotenv').config();

const routes = require('./routes');
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE - JSON parsing that allows AJAX requests (asynchronous javascript & XML)
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// ROUTES
app.get('/', (req, res) => {
    res.send('Backend Connected');
})

// RESTAURANT ROUTES
app.use('/restaurant', routes.restaurants);

// AUTH ROUTES
// app.use('/user', routes.auth);

// CONNECTION
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});