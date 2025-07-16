
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/news', (req, res) => {
  res.json([{ id: 1, title: 'Welcome to SportPulse!', content: 'Your first article.' }]);
});

module.exports = app;
