var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./components/Header');
var Footer = require('./components/Footer');

var App = React.createClass({
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
