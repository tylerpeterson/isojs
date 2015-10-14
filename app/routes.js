var stream = require('express-stream');
var beaconService = require('./beacon-service');
var debug = require('debug')('isojs');
var React = require('react');
var parms = require('./demo-parameters');
var lorem = require('lorem-ipsum');
var ReactDomServer = require('react-dom/server');
var data = require('./project-data');

var fakeData = function () {
  return lorem({
    units: 'paragraphs',
    count: 3,
    format: 'html'
  });
};

var ReactBelow = React.createFactory(require('../components/below'));

module.exports = function (app) {
  app.get('/', stream.pipe(), function (req, res) {
    var beaconId = beaconService.nextBeaconId();
    var projectData = data.getData(beaconId);

    res.stream(
      'above', // Content always rendered on the server
      {
        beaconId: beaconId, // unique beacon for this request
        aboveText: fakeData()
      });

    beaconService.promiseForBeaconId(beaconId).then(function () {
      var reactHtml = "err";
      try {
        reactHtml = ReactDomServer.renderToString(ReactBelow({data:projectData}));
      } catch (err) {
        debug("Err when rendering on server with react:", err);
      }

      res.stream('below', {reactHtml: reactHtml, clientSideJS: parms.clientSideJS});
      res.close();
    });
  });





  app.get('/beacon', function (req, res) {
    var gifHex = '47494638396101000100800000ffffff0000002c00000000010001000002024401003b';
    var gifBinary = new Buffer(gifHex, 'hex');
    var beaconId = req.query.id;

    debug('A beacon called back: ', beaconId);
    beaconService.reportBeaconId(beaconId);

    res.writeHead(200, {'Content-Type': 'image/gif'});
    res.end(gifBinary, 'binary');
  });





  app.get('/project', function (req, res) {
    var prid = req.query.id;

    debug('Page asked for project details.', prid);
    data.findPromise(prid).delay(parms.roundTripLatency()).then(function (count) {
      res.json(count);
    });
  });
};