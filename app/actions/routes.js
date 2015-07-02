/**
 * @file React Route Action for Advertising
 */
var constants = require('../constants');

var RouteActions = {
  transition: function(redirectOptions) {
    var path = redirectOptions.path;
    var params = redirectOptions.params || {};
    var query = redirectOptions.query || {};
    setTimeout(function() {
      this.dispatch(constants.actions.ROUTE_ACTIONS.TRANSITION, {path: path, params: params, query: query});
    }.bind(this));
  }
};

module.exports = RouteActions;
