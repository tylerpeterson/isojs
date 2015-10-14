'use strict';

var React = require('react');

module.exports = React.createClass({
  displayName: 'ProjectStatus',
  render: function () {
    return <div className='status'
        data-name={this.props.name}
        data-count={this.props.count}
        data-promise-id={this.props.promiseId}
        data-status={this.props.status}>Project: {this.props.name}, activity: {this.props.count}</div>;
  }
});