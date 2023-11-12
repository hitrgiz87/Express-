const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET dashboard page. */
router.get('/dashboard', async function(req, res, next) {
  try {
    const { data: fakeData } = await axios.get('https://jsonplaceholder.typicode.com/todos');
    res.render('dashboard', { todos: fakeData }); // Pass fake data to the dashboard
  } catch (error) {
    next(error);
  }
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  // Mock user data
  const userData = {
    username: 'JohnDoe',
    email: 'john@example.com',
    // Add more user data as needed
  };
  res.render('profile', { user: userData }); // Pass user data to the profile
});

module.exports = router;



// Define a route for the root URL
router.get('/', function(req, res, next) {
  // Replace this with your desired logic/rendering
  res.render('index', { title: 'Express App' });
});

module.exports = router;
