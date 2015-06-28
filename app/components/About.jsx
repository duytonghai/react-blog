var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var About = React.createClass({
  render: function() {
    return <Link to={"home"}>Home</Link>;
  }
});

module.exports = About;
