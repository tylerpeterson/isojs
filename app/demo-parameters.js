module.exports = {
  roundTripLatency: function() {
    return 30; // milliseconds
  },
  clientSideJS: true,
  beaconBehavior: 'img' // 'img', 'script', 'no-wait', or 'till-done'
};