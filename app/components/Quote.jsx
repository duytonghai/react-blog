/**
 * React quotes component
 */

var React = require('react');

var Quote = React.createClass({
  displayName: 'Quote',
  render: function() {
    return (
      <div className="text-monials">
      <div className="wrap">
        <ul>
          <li> </li>
          <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> </li>
          <li> </li>
          <div className="clear"> </div>
        </ul>
      </div>
    </div>
    );
  }
});

module.exports = Quote;
