/**
 * Component saving data for about
 */
var Fluxxor = require('fluxxor');

var constants = require('../constants');
var ABOUT_ACTIONS = constants.actions.ABOUT_ACTIONS;

var AboutStore = Fluxxor.createStore({
  initialize: function() {
    this.about = null;

    this.bindActions(
      ABOUT_ACTIONS.GET_DETAIL, this.onGetDetail
    );
  },

  onGetDetail: function(payload) {
    this.about = payload.data;
    this.emit('change');
  },

  getDetail: function() {
    return this.about;
  }
});

module.exports = AboutStore;
