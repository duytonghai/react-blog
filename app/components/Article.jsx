/**
 * React articles component
 */

var React = require('react');

var Article = React.createClass({
  displayName: 'Article',
  render: function() {
    return (
      <div className="blog-articlas">
        <div className="wrap">
          <div className="content-top-header">
            <h3>Latest News</h3>
            <p>Find out What is Going On</p>
          </div>
          <div className="clear"> </div>
          <div className="blog-articla-grids">
            <div className="blog-articla-grid">
              <div className="blog-articla-grid-pic">
                <a href="bsingle.html"><img src="images/artpic1.png" alt=" " /></a>
              </div>
              <div className="blog-articla-grid-info">
                <h3><a href="bsingle.html">Lorem ipsum dolor sit amet adipisicing elit?</a></h3>
                <ul>
                  <li><p>post on <a href="bsingle.html">July 28,2013</a></p></li>
                  <li><a href="bsingle.html"> James Reed</a></li>
                  <li><a href="bsingle.html"> Technology</a></li>
                  <p className="artical-para">
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a className="artbtn" href="bsingle.html">Read More</a>
                </ul>
              </div>
              <div className="clear"> </div>
            </div>
            <div className="blog-articla-grid">
              <div className="blog-articla-grid-pic">
                <a href="bsingle.html"><img src="images/artpic2.png" alt=" " /></a>
              </div>
              <div className="blog-articla-grid-info">
                <h3><a href="#">sed do eiusmod tempor incididunt ut labo</a></h3>
                <ul>
                  <li><p>post on <a href="bsingle.html">July 28,2013</a></p></li>
                  <li><a href="bsingle.html"> James Reed</a></li>
                  <li><a href="bsingle.html"> Technology</a></li>
                  <p className="artical-para">
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a className="artbtn" href="bsingle.html">Read More</a>
                </ul>
              </div>
              <div className="clear"> </div>
            </div>
            <div className="blog-articla-grid">
              <div className="blog-articla-grid-pic">
                <a href="bsingle.html"><img src="images/artpic3.png" alt=" " /></a>
              </div>
              <div className="blog-articla-grid-info">
                <h3><a href="bsingle.html">incididunt ut labore et dolore magna</a></h3>
                <ul>
                  <li><p>post on <a href="#">July 28,2013</a></p></li>
                  <li><a href="bsingle.html"> James Reed</a></li>
                  <li><a href="bsingle.html"> Technology</a></li>
                  <p className="artical-para">
                    consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <a className="artbtn" href="bsingle.html">Read More</a>
                </ul>
              </div>
              <div className="clear"> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Article;
