const EventEmitter = require('events');

var ulr = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
    // Send an HTTP request
    console.log(message);

    // raise an event
    this.emit('messageLogged', { id: 1, url: 'http://' });
    //  emit - making a noise, produce - signaling
    }
}


module.exports = Logger;