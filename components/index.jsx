'use strict';

var ReactDom = require('react-dom');
var Below = require('./below');

var data = {name: "Mango", count: 20};
ReactDom.render(<Below data={data}/>, document.getElementById('below-the-fold'));