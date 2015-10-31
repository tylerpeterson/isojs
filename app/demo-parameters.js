module.exports = {
  roundTripLatency: function() {
    // return 150 + Math.round(Math.random() * 150); // fast connection
    return 1500 + Math.round(Math.random() * 1500); // slower connection
  },
  projectDataLatency: function () {
    return 50 + Math.round(Math.random() * 10000); // fast to very slow responses
    // return 500 + Math.round(Math.random() * 100); // mostly medium responses
  },
  clientSideJS: true // Set to false to prevent downloading the bundled JS
};