'use strict';

var ReactDom = require('react-dom');
var Hello = require('./Hello');
var ProjectStatus = require('./project-status');

ReactDom.render(
  <div>
    <Hello />
    <ProjectStatus name="Mango" count="20" />
  </div>, document.getElementById('content'));