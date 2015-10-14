module.exports = {
  roundTripLatency: function() {
    return 30 + Math.round(Math.random() * 30); // milliseconds
  },
  projectDataLatency: function () {
    return 30 + Math.round(Math.random() * 100);
  },
  clientSideJS: true,
  beaconBehavior: 'img' // 'img', 'script', 'no-wait', or 'till-done'
};