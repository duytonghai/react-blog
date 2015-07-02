var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./Header');
var Footer = require('./Footer');

var App = React.createClass({
  displayName: 'Main Application',
  mixins: [FluxMixin],
  render: function() {
    return (
      <div>
      	<Header />
      	<RouteHandler />
      	<Footer />
      </div>
    );
  }
});

module.exports = App;
