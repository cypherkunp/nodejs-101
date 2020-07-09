const redis = require('redis');
const redisUrl = 'redis://localhost:6379';

function runRedis() {
  const rClient = redis.createClient(redisUrl);
  rClient.set('hello', 'world');

  // nested hashes
  rClient.hset('spanish', 'red', 'rojo');
  rClient.hset('spanish', 'orange', 'naranja');
  rClient.hset('spanish', 'blue', 'azul');

  rClient.hset('german', 'red', 'rot');
  rClient.hset('german', 'orange', 'orange');
  rClient.hset('german', 'blue', 'blau');

  rClient.get('hello', (err, value) => {
    if (err) console.log(err);
    else console.log(value);
  });

  rClient.hget('spanish', 'red', (err, value) => {
    if (err) console.log(err);
    else console.log(value);
  });
}
runRedis();
