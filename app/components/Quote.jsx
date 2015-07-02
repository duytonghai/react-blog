/**
 * React quotes component
 */

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Quote = React.createClass({
  displayName: 'Quote',
  getInitialState: function() {
    return {
      quote: "Stay hungry, stay foolish"
    };
  },
  render: function() {
    return (
      <div className="text-monials">
      <div className="wrap">
        <ul>
          <li></li>
          <li><p>{this.state.quote}</p></li>
          <li></li>
          <div className="clear"></div>
        </ul>
      </div>
    </div>
    );
  }
});

module.exports = Quote;
