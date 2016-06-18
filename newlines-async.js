var fs = require('fs');
var input = process.argv[2];

fs.readFile(input, 'utf8', function (err, fileContents) {  // passing utf8 as second arg converts input to string
    console.log(fileContents.split(/\n/).length - 1);
});



