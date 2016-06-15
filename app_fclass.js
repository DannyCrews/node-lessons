// function statement
function greet() {
  console.log('hi');
}

greet();

// functions are first-class
function logGreeting(fn) {
  fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
  console.log('Hi, Dan');
}

logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
  console.log('Hello, Dan');
})