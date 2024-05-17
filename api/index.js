const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/api/data', (req, res) => {
  const dataPath = path.join(__dirname, '..', 'data.json');
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data file' });
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
});

module.exports = app;
