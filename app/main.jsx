/**
 * Main file to render child components for the whole app
 */

var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var Fluxxor = require('fluxxor');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var actions = require('./actions');
var stores = require('./stores');

var App = require('./components/App');
var Home = require('./components/Home');
var About = require('./components/About');
var Contact = require('./components/Contact');

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
      <Route name="contact" path="contact" handler={Contact} />
    </Route>
  );

  var flux = new Fluxxor.Flux(stores, actions);
  flux.on('dispatch', function(type, payload) {
    console.log('Dispatch: ', type, payload);
  });

  var router = Router.create({routes: routes});

  flux.stores.RouteStore.setRouter(router);

  _.forEach(requireFeatures, function(feature) {
    if (!requireFeatures[feature]) {
      console.log('Sorry, but your browser does not support ' + feature + ' so this app won\'t work properly.');
    }
  });

  return router.run(function(Handler) {
    React.render(<Handler flux={flux} />, document.body);
  });
})();
