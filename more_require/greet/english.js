// get json file
var greetings = require('./greetings.json');

var greet = function() {
  console.log(greetings.en);
}

// export function expression greet
module.exports = greet;