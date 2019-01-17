//import
const EventEmitter = require('events');

//extend
class Logger extends EventEmitter {
    constructor() {
        super()
    }
}

//init
const logger = new Logger();

//addListener
logger.on('boom', () => console.log('Athlete is working out'));

//emit
setInterval(() => { 
    console.log("boom");
    logger.emit('boom')}, 1000)



