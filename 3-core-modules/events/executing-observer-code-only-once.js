const EventEmitter = require('events');

class Job extends EventEmitter{}
const job = new Job();

job.once('knock', function () {  
    console.log(`Who is there? Won't ask twice!`);
});

// Although the event knock is emitted twice, 
// the observer is called only once
job.emit('knock');
job.emit('knock');

