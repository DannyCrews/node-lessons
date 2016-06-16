var fs = require('fs');
var zlib = require('zlib'); // allows us to implement a gzip file

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs. createWriteStream(__dirname + '/greetcopy.txt')

var compressed = fs. createWriteStream(__dirname + '/greet.txt.gz')

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);


// note use of event emitter below
// readable.on('data', function(chunk) {   
//   console.log(chunk.length);
//   writable.write(chunk); 
// });
