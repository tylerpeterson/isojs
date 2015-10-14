module.exports = {
  roundTripLatency: function() {
    return 30; // milliseconds
  },
  projectDataLatency: function () {
    return 30;
  },
  clientSideJS: true,
  beaconBehavior: 'img' // 'img', 'script', 'no-wait', or 'till-done'
};