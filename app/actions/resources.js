/**
 * @file About actions
 */

var constants = require('../constants');
var data = require('../database/data');

var ABOUT_ACTIONS = constants.actions.ABOUT_ACTIONS;
var QUOTE_ACTIONS = constants.actions.QUOTE_ACTIONS;

var ResourceActions = {
  getAboutDetail: function() {
    this.dispatch(ABOUT_ACTIONS.GET_DETAIL, data.about);
  },

  getQuoteDetail: function() {
    this.dispatch(QUOTE_ACTIONS.GET_DETAIL, data.quote);
  }
};

module.exports = ResourceActions;
