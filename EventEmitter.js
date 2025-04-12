const EventEmitter = require('events')
const event = new EventEmitter();
event.on('greet', () => {
    console.log("Hola! this is a event lister code");
})
event.emit('greet')