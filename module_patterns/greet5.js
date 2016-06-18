var greeting = 'Hello world!!!!';

function greet() {
  console.log(greeting);
}

module.exports = {
  greet: greet
}

// Revealing Module Pattern: Expose only the properties and methods
// you want via a returned object