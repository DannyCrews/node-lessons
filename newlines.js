var fs = require('fs'); // fs module from node core library
var input = process.argv; // get the command line args array

// var inputFile = fs.readFileSync(input[2]).toString(); //get file Buffer object and convert to string
var inputFile = fs.readFileSync(process.argv[2], 'utf8');
// console.log(inputFile);
//split the string on /n
console.log(inputFile.split(/\n/).length - 1);
//count the elements in the resultant array - 1
//print the count to the console
