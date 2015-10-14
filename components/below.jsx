var React = require('react');
var Hello = require('./hello');
var ProjectStatus = require('./project-status');

module.exports = React.createClass({
  displayName: 'Below',
  render: function () {
    return (
      <div>
        <Hello />
        <ProjectStatus name="Orange" count="20" />
        <ProjectStatus name={this.props.data.name} count={this.props.data.count} />
     </div>);
  }
})