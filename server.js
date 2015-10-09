require('node-jsx').install();

var express = require('express');
var path = require('path');

var app = express();
var port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./app/routes')(app);

app.get('*', function (req, res) {
  res.send('Sorry! This page does not exist!');
});

app.listen(port);