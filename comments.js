// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Configure web server
app.use(bodyParser.json());

// Create route to receive comments
app.post('/api/comments', (req, res) => {
  const comment = req.body;
  console.log(comment);
  res.send(comment);
});

// Create route to send comments
app.get('/api/comments', (req, res) => {
  const comments = [
    { name: 'John', message: 'Hello' },
    { name: 'Jack', message: 'Hi' },
  ];
  res.send(comments);
});

// Start web server
app.listen(3001, () => {
  console.log('Web server started at http://localhost:3001');
});