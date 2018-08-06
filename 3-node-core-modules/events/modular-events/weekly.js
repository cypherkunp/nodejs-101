var Job = require('./jobs');
var job = new Job();

job.on('done', function (details) {
    console.log('Weekly email job was completed at', details.completedOn);
})

job.emit('start');

 /**
When you run weekly.js, the custom logic pertaining to the done event
will be executed from weekly.js. This way the creators of the job.js module
can keep the module flexible. They don't have to hard code any logic for the
done event in the module. Consumers of the module job.js, people who write weekly.js,
have the power to customize the behavior for the done event, and not only for that event.
Event emitters can have multiple events: in the middle, at the start, in the end, etc.
They can be called (emitted or triggered) multiple times and with data 
(passed as the second argument to emit() as can be seen in job.js). 
Furthermore, there are methods to list or remove event listeners (observers) 
or to specify the execution of an event listener (observer) just once (.once() method).
 */