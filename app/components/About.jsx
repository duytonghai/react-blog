var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var About = React.createClass({
	displayName: "About",
  render: function() {
    return (
    	<div className="blog-articlas">
    		<div className="wrap">
	    		About<br />
	    		<Link to={"home"}>Home</Link>
	    	</div>
    	</div>
  	);
  }
});

module.exports = About;
