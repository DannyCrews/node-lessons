// function constructor
function Greetr() {
  this.greeting = 'Hello world!!';
  this.greet = function() {
    console.log(this.greeting);
  }
}

// replace empty object with function statement
module.exports = Greetr;