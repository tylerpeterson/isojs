module.exports = {
  roundTripLatency: function() {
    return 1500 + Math.round(Math.random() * 1500); // milliseconds
  },
  projectDataLatency: function () {
    return 50 + Math.round(Math.random() * 10000);
  },
  clientSideJS: true,
  beaconBehavior: 'img' // 'img', 'script', 'no-wait', or 'till-done'
};