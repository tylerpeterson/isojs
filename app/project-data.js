
// A file for generating and meteing out dummy data both on the client and the server.

var parms = require('./demo-parameters');
var Q = require('q');

var data = [
  {name: "Mango"},
  {name: "Apple Banana"},
  {name: "Asian Guava"},
  {name: "Avocado"},
  {name: "Star Apple"},
  {name: "Egg Fruit"},
  {name: "Star Fruit"},
  {name: "Jackfruit"},
  {name: "Key Lime"},
  {name: "Kumquat"},
  {name: "Miracle Fruit"},
  {name: "Papaya"},
  {name: "Passion Fruit"},
  {name: "Coconut"},
  {name: "Orange"}
];

var promises = {};

var mod = {
  getData: function (beaconId) {
    return data.map(function (proj, idx) {
      return {name: proj.name, count: "...", promiseId: mod.makePromiseId(beaconId, idx)};
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