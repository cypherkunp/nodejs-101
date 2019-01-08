const EventEmitter = require('events');

class Job extends EventEmitter {
    constructor(opts){
        super(opts);
        this.on('start', () =>{
            this.process();
        });
    }

    process(){
        setTimeout(() => {
            // emulate the delay of the job as async!
            this.emit('done', {completedOn: new Date()});
        }, 700);
    }
}

module.exports = Job;