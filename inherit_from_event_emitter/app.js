var EventEmitter = require('events');
var util = require('util');

// a function constructor
function Greetr() {
  EventEmitter.call(this);
  this.greeting = 'Hello world!';
}

// using inherits from util module
// any objects created on Greetr should also have
// access to the methods and properties on the prototype 
// event emitter 
util.inherits(Greetr, EventEmitter);

// can still add own methods and properties to Greetr
Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ': ' + data);
  this.emit('greet', data); // because Greetr has access to 'events'
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log('Someone greeted!: ' + data);
});

greeter1.greet('Dan');