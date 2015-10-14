'use strict';

var ReactDom = require('react-dom');
var Below = require('./below');
var data = require('../app/project-data');
var beaconId = 0;
var handedOffData = [];
var attachPoint = document.getElementById('below-the-fold');

function retrieveBeaconId() { // Retrieve the beaconId
  var metas = document.getElementsByTagName('meta');
  var i, l = metas.length;
  for (i=0; i < l; ++i) {
    if (metas[i].getAttribute('name') == 'beaconId') {
      beaconId = metas[i].getAttribute('content');
      break;
    }
  }
}

retrieveBeaconId();

function retrieveHandoffData() {
  var statusElements = attachPoint.getElementsByClassName('status');
  var i, d, l = statusElements.length;
  for (i=0; i < l; ++i) {
    d = statusElements[i].dataset;
    handedOffData.push({
      name: d.name + '-',
      count: d.count,
      status: d.status,
      promiseId: d.promiseId
    });
  }
}

retrieveHandoffData();

var belowComponent = ReactDom.render(React.createElement(Below, {data: handedOffData}), attachPoint);

