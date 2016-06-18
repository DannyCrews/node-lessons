// grabs these modules
var english = require('./english');
var spanish = require('./spanish');

// exports them to whereever require(./index.js) is used
module.exports = {
  english: english,
  spanish: spanish
}