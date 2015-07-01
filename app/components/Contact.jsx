var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Contact = React.createClass({
	displayName: 'Contact',
  render: function() {
    return (
    	<div className="blog-articlas">
    		<div className="wrap">
	    		Contact<br />
	    		<Link to={"home"}>Home</Link>
	    	</div>
    	</div>
  	);
  }
});

module.exports = Contact;
