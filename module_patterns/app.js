var greet = require('./greet1');
greet(); // execute function returned from file greet1.js

var greet2 = require('./greet2').greet;
greet2(); // since greet is a method on the exports object

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// returns 'Changed...' because Node's require caches
// greet3 call above and that object is changed
var greet3b = require('./greet3');
greet3b.greet();


var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();


var greet5 = require('./greet5').greet;
greet5();

