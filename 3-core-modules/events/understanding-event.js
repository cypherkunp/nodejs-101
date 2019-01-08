const EventsEmitter = require('events');

class Job extends EventsEmitter { }

let job = new Job();

job.on('done', function (date) {
    console.log('job completed on ', date);
});

job.emit('done', new Date());
job.removeAllListeners();