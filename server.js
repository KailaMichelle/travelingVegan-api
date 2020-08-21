// Imports
const express = require ('express');
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware - JSON parsing that allows AJAX requests (asynchronous javascript & XML)
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Backend Connected');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});