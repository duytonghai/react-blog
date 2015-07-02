/**
 * @file About component
 */

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Router = require('react-router');
var Link = Router.Link;

var About = React.createClass({
	displayName: "About",
  mixins: [FluxMixin, StoreWatchMixin('AboutStore')],
  getStateFromFlux: function() {
    var aboutStore = this.getFlux().store('AboutStore');

    return {
      about: aboutStore.getDetail()
    };
  },
  componentDidMount: function() {
    if (!this.state.about) {
      this.getFlux().actions.resources.getAboutDetail();
    }
  },
  render: function() {
    return (
    	<div className="blog-articlas">
    		<div className="wrap">
	    		{this.state.about}<br />
	    		<Link to={"home"}>Home</Link>
	    	</div>
    	</div>
  	);
  }
});

module.exports = About;
