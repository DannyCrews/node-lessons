var fs = require('fs')  
var path = require('path')  

module.exports = function (folder, ext, callback) {
    var dotExt = '.' + ext
    
    fs.readdir(folder, function (err, data) {
        if (err) return callback(err);
        
        data = data.filter(function(file) {
            return path.extname(file) === dotExt;
        })
    
        callback(null, data);
    })
};