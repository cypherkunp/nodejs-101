const express = require('express');
const cluster = require('cluster');
const crypto = require('crypto');

const app = express();

const port = 3000;

if (cluster.isMaster) {
  // if master, execute index.js in slave mode
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork(); // Each has it own thread pool i.e 4 by default
} else {
  // I am a child, i am going to act like a server
  app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
      res.send('Hello World');
    });
  });

  app.get('/fast', (req, res) => {
    res.send('Hello World, This was quick!');
  });

  app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
}
