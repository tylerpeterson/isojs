var Q = require('q');
var nextId = 1;
var promises = {};
var parms = require('./demo-parameters');


module.exports = {
  nextBeaconId: function () {
    return nextId++;
  },

  promiseForBeaconId: function (id) {
    if (!promises.hasOwnProperty(id)) {
      promises[id] = Q.defer();
    }
    return promises[id].promise;
  },

  reportBeaconId: function (id) {
    if (!promises.hasOwnProperty(id)) {
      throw new Error("Don't have a promise for this beacon: " + id);
    }
    Q.delay(parms.roundTripLatency()).then(function () {
      promises[id].resolve();
    });
  }
};