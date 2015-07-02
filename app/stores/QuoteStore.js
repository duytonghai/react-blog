/**
 * Component saving data for quote
 */
var Fluxxor = require('fluxxor');

var constants = require('../constants');
var QUOTE_ACTIONS = constants.actions.QUOTE_ACTIONS;

var QuoteStore = Fluxxor.createStore({
  initialize: function() {
    this.quote = null;

    this.bindActions(
      QUOTE_ACTIONS.GET_DETAIL, this.onGetDetail
    );
  },

  onGetDetail: function(payload) {
    this.quote = payload.data;
    this.emit('change');
  },

  getDetail: function() {
    return this.quote;
  }
});

module.exports = QuoteStore;
