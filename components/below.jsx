var React = require('react');
var ProjectStatus = require('./project-status');

module.exports = React.createClass({
  displayName: 'Below',
  render: function () {
    return (
      <div>
        {this.props.data.map(function (proj, idx) {
          return <ProjectStatus name={proj.name} count={proj.count} promiseId={proj.promiseId} key={proj.promiseId}/>
        })}
     </div>);
  }
})