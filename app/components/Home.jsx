var _ = require('lodash');
var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var Router = require('react-router');
var Link = Router.Link;

var data = require('../database/data');

var Article = require('./Article');
var Slider = require('./Slider');
var Quote = require('./Quote');

var Home = React.createClass({
  displayName: 'Home',
  mixins: [FluxMixin, StoreWatchMixin('QuoteStore')],
  getStateFromFlux: function() {
    var quoteStore = this.getFlux().store('QuoteStore');

    return {
      quote: quoteStore.getDetail()
    };
  },
  componentDidMount: function() {
    if (!this.state.quote) {
      this.getFlux().actions.resources.getQuoteDetail();
    }
  },
  render: function() {
    return (
      <div>
        <Quote quote={this.state.quote} />
        <Slider />
        <Article />
      </div>
    );
  }
});

module.exports = Home;
