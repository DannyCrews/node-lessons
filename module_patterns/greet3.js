// function constructor
function Greetr() {
  this.greeting = 'Hello world!!!';
  this.greet = function() {
    console.log(this.greeting);
  }
}

// replace empty object with new object
module.exports = new Greetr();