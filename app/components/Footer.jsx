/**
 * React header component
 */

var React = require('react');

var Footer = React.createClass({
  displayName: 'Footer',
  render: function() {
    return (
      <div className="footer"> 
        <div className="wrap"> 
          <div className="footer-left">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
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
