/**
 * React header component
 */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Footer = React.createClass({
  displayName: 'Footer',
  render: function() {
    return (
      <div className="footer"> 
        <div className="wrap"> 
          <div className="footer-left">
            <ul>
              <li><Link to={"home"}>Home</Link></li>
              <li><Link to={"about"}>About</Link></li>
              <li><Link to={"contact"}>Contact</Link></li>
              <div className="clear"></div>
            </ul>
          </div>
          <div className="footer-center">
            <ul>
              <li><a href="#"><span> </span></a></li>
              <li><a href="#"><span> </span></a></li>
              <li><a href="#"><span> </span></a></li>
              <li><a href="#"><span> </span></a></li>
              <div className="clear"> </div>
            </ul>
          </div>
          <div className="footer-right">
            <p>Copyright &#169; 2013 Designer First. All Rights Reserved. Developed by Duy Tong Hai</p>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
