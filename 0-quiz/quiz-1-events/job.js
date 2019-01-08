const EventEmitter = require('events');
const sdk = require('magic-sdk');
class Job extends EventEmitter {
  constructor(ops) {
    super(ops);
    this.launch();
  }
  launch() {
    sdk.launchMagicJob((error, magicData) => {
      if (!error)
        return this.emit('finished', magicData);
      else
        this.emit('error', error);
    });
  }
}

module.exports = Job