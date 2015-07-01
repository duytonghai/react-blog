var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Contact = React.createClass({
	displayName: 'Contact',
  render: function() {
    return <Link to={"home"}>Home</Link>;
  }
});

module.exports = Contact;
