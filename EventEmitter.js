const EventEmitter = require('events')
const event = new EventEmitter();
event.on('greet', () => {
    console.log("Hola! this is a event lister code")
})
event.emit('greet')


// Event with parameters
event.on('greet' , (name) => {
    console.log(`Hola ${name}! , How are you`)
})

event.emit('greet' , 'Thala')
event.emit('greet' , 'Reason')
// While running this code
//Even after giving parameters , basic function is working



//Only once , executes the event for a single time , another call of it will not be trigerred.
event.once('OnlyOnce' , () => {
    console.log("This function will be trigerred only once")
});
event.emit("OnlyOnce") // Event trigerred
event.emit("OnlyOnce") // Event wil not function
