// gonna build a homegrown event emitter

var Emitter = require('./emitter'); //call emitter module

var emtr = new Emitter(); // create new Emitter object

// add listeners (really just functions in an array)
// to the emitter 
emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occurred!');
});

console.log('Hello');
emtr.emit('greet'); // manually emit the event

