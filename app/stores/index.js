/**
 * Import and init stores
 */

var AboutStore = require('./AboutStore');
var QuoteStore = require('./QuoteStore');
var RouteStore = require('./RouteStore');

module.exports = {
  AboutStore: new AboutStore(),
  QuoteStore: new QuoteStore(),
  RouteStore: new RouteStore()
};
