/**
 * @file RouteStore for application
 */
var Fluxxor = require('fluxxor');

var constants = require('../constants');

var ROUTE_ACTIONS = constants.actions.ROUTE_ACTIONS;

var RouteStore = Fluxxor.createStore({
  initialize: function(options) {
    this.router = options.router;

    this.bindActions(
      ROUTE_ACTIONS.TRANSITION, this.handleRouteTransition
    );
  },

  setRouter: function(router) {
    this.router = router;
  },

  handleRouteTransition: function(payload) {
    var path = payload.path;
    var params = payload.params;
    var query = payload.query;

    this.router.transitionTo(path, params, query);
  }
});

module.exports = RouteStore;
