'use strict';

var ReactDom = require('react-dom');
var Below = require('./below');

var handedOffData = [];
var attachPoint = document.getElementById('below-the-fold');

function retrieveHandoffData() {
  var statusElements = attachPoint.getElementsByClassName('status');
  var i, d, proj, l = statusElements.length;

  for (i=0; i < l; ++i) {
    d = statusElements[i].dataset;
    proj = {
      name: d.name + '-',
      count: d.count,
      status: d.status,
      promiseId: d.promiseId
    };

    handedOffData.push(proj);

    if (proj.status !== 'done') {
      completeHandoff(proj);
    }
  }
}

function completeHandoff(proj) {
  var req;

  console.debug('completing handoff for ' + proj.promiseId);
  req = new XMLHttpRequest();
  req.addEventListener('load', function () {
    console.debug('Got results', proj.promiseId, req.responseText);
    proj.count = req.responseText;
    proj.status = 'done';
    renderBelow();
  });
  req.open('GET', '/project?id=' + proj.promiseId);
  req.send();
}

function renderBelow() {
  ReactDom.render(React.createElement(Below, {data: handedOffData}), attachPoint);
}

retrieveHandoffData();
renderBelow();
