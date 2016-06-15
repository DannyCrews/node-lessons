// gonna build a homegrown event emitter

var Emitter = require('events'); //call emitter module
var eventConfig = require('./config').events;

var emtr = new Emitter(); // create new Emitter object

// add listeners (really just functions in an array)
// to the emitter 
emtr.on(eventConfig, function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig, function() {
  console.log('A greeting occurred!');
});

console.log('Hello');
emtr.emit(eventConfig); // manually emit the event

