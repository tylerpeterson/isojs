'use strict';

var ReactDom = require('react-dom');
var Below = require('./below');
var data = require('../app/project-data');

ReactDom.render(<Below data={data.getData()}/>, document.getElementById('below-the-fold'));