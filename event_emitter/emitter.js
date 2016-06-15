// constructor function for Emitter object
function Emitter() {
  this.events = {};
}

// the Emitter object "on" method adds a listener (function)
// to to an existing type property on the Emitter's event object or creates
// the property and then adds the listener
Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

// if I say emit 'type' - 
// check and see if 'type' is a property on the object
// if true, then loop thru array and invoke any functions in array
// 
Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;