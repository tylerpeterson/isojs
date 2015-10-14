require('node-jsx').install({extension: '.jsx'});

var express = require('express');
var path = require('path');

var app = express();
var port = 8080;

app.use(express.static(path.join(__dirname, 'node_modules', 'react', 'dist')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./app/routes')(app);

app.get('*', function (req, res) {
  res.send('Sorry! This page does not exist!');
});

app.listen(port);