'use strict';

var ReactDom = require('react-dom');
var Below = require('./below');
var data = require('../app/project-data');

var metas = document.getElementsByTagName('meta');
var i, l = metas.length, beaconId=0;
   
for (i=0; i < l; ++i) {
  if (metas[i].getAttribute('name') == 'beaconId') {
    beaconId = metas[i].getAttribute('content');
    break;
  }
}


ReactDom.render(<Below data={data.getData(beaconId)}/>, document.getElementById('below-the-fold'));