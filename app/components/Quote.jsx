/**
 * React quotes component
 */

var React = require('react');

var Quote = React.createClass({
  displayName: 'Quote',
  propTypes: {
    quote: React.PropTypes.string
  },
  render: function() {
    return (
      <div className="text-monials">
      <div className="wrap">
        <ul>
          <li></li>
          <li><p>{this.props.quote}</p></li>
          <li></li>
          <div className="clear"></div>
        </ul>
      </div>
    </div>
    );
  }
});

module.exports = Quote;
