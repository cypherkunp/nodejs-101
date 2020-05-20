const express = require('express');
const crypto = require('crypto');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/slow', (req, res) => {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    res.send('Hello World, This was slow!');
  });
});

app.get('/fast', (req, res) => {
  res.send('Hello World, This was quick!');
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
