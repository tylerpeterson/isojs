var stream = require('express-stream');

module.exports = function (app) {
  app.get('/', stream.pipe(), function (req, res) {
    res.stream('above');
    var timeout = setTimeout(function() {
      res.stream('below');
      res.close();
    }, 1000);
  });
};