
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Pug configuration
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Classes route
app.get('/classes', (req, res) => {
    res.render('classes');
});

// Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
