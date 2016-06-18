var bodyParser = require('body-parser');

module.exports = function(app) {

  app.get('/api/person/:id', function(req, res) {
  // get that data from the database
    res.json({ firstname: 'Dan', lastname: 'Crews' });
  });

  app.post('/api/person', function(req, res) {
    // save to the database
  });

  app.delete('/api/person/:id', function(req, res) {
    // delete from database
  });


}