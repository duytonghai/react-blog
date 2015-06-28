/**
 * Main file to render child components for the whole app
 */

var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('./App');
var Home = require('./components/Home');
var About = require('./components/About');

window.app = (function() {
  var requireFeatures = {
    'JSON decoding': window.JSON,
    'the selector API': document.querySelector,
    'ES5 array method': Array.prototype.forEach,
    'DOM level 2 events': window.addEventListener,
    'the HTML5 history API': window.history.pushState
  };

  var routes = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute handler={Home} />
      <Route name="home" path="home" handler={Home} />
      <Route name="about" path="about" handler={About} />
    </Route>
  );

  _.forEach(requireFeatures, function(feature) {
    if (!requireFeatures[feature]) {
      console.log('Sorry, but your browser does not support ' + feature + ' so this app won\'t work properly.');
    }
  });

  return Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
  });
})();
