'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'ProjectStatus',
  render: function () {
    return <div>Project: {this.props.name}, Activity: {this.props.count}</div>;
  }
});