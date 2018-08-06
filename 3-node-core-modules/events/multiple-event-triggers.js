const EventEmitter = require('events');

class Job extends EventEmitter {}
var job = new Job();

job.on('knock', function () {
    console.log('Who is there?');
  });

job.on('knock', function () {  
    console.log('go away!');
});

job.emit('knock');
job.emit('knock');