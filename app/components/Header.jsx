/**
 * React header component
 */

var React = require('react');

var Header = React.createClass({
  displayName: 'Header',
  render: function() {
    return (
      <div className="wrap">
        <div className="header">
          <div className="logo">
            <a href="index.html"> </a>
          </div>
          <div className="top-nav">
            <ul>
              <li className="active"><a href="index.html"> <span> </span></a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="#">Fonts</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="icons.html">Icons</a></li>
              <li><a href="#">Wordpress</a></li>
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
