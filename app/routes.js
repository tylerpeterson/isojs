var stream = require('express-stream');
var beaconService = require('./beacon-service');
var debug = require('debug')('isojs');

module.exports = function (app) {
  app.get('/', stream.pipe(), function (req, res) {
    var beaconId = beaconService.nextBeaconId();
    res.stream('above', {beaconId: beaconId});
    beaconService.promiseForBeaconId(beaconId).then(function () {
      res.stream('below');
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
};