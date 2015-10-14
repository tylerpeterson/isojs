var React = require('react');
var ProjectStatus = require('./project-status');

module.exports = React.createClass({
  displayName: 'Below',
  render: function () {
    return (
      <div>
        <ProjectStatus name="Orange" count="20" />
        <ProjectStatus name={this.props.data.name} count={this.props.data.count} />
     </div>);
  }
})