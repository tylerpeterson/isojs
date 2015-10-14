
// A file for generating and meteing out dummy data both on the client and the server.

var parms = require('./demo-parameters');
var Q = require('q');

var data = [
  {name: "Mango", count: 20},
  {name: "Apple Banana", count: 20},
  {name: "Asian Guava", count: 20},
  {name: "Avocado", count: 20},
  {name: "Star Apple", count: 20},
  {name: "Egg Fruit", count: 20},
  {name: "Star Fruit", count: 20},
  {name: "Jackfruit", count: 20},
  {name: "Key Lime", count: 20},
  {name: "Kumquat", count: 20},
  {name: "Miracle Fruit", count: 20},
  {name: "Papaya", count: 20},
  {name: "Passion Fruit", count: 20},
  {name: "Coconut", count: 20},
  {name: "Orange", count: 199}
];

var promises = {};

var mod = {
  getData: function (beaconId) {
    return data.map(function (proj, idx) {
      return {name: proj.name, count: Math.floor(Math.random() * 500), promiseId: mod.makePromiseId(beaconId, idx)};
    });
  },
  getProjectCount: function (beaconId, projectId) {
    var promiseId = mod.makePromiseId(beaconId, projectId);
    return mod.findPromise(promiseId);
  },
  makePromiseId: function (beaconId, projectId) {
    return "prid:" + beaconId + ":" + projectId;
  },
  findPromise: function (promiseId) {
    if (!promises.hasOwnProperty(promiseId)) {
      promises[promiseId] = Q(Math.round(Math.random() * 500)).delay(parms.projectDataLatency());
    }

    return promises[promiseId];
  }
};

module.exports = mod;