// get json file
var greetings = require('./greetings.json');

var greet = function() {
  console.log(greetings.es);
}

// export function expression greet
module.exports = greet;