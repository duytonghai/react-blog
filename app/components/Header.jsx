/**
 * React header component
 */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
  displayName: 'Header',
  render: function() {
    return (
      <div className="wrap">
        <div className="header">
          <div className="logo">
            <Link to={"home"}></Link>
          </div>
          <div className="top-nav">
            <ul>
              <li className="active"><Link to={"home"}> <span> </span></Link></li>
              <li><Link to={"about"}>About</Link></li>
              <li><Link to={"contact"}>Contact</Link></li>
              <div className="clear"> </div>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
