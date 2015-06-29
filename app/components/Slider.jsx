/**
 * React slider component
 */

var React = require('react');

var Slider = React.createClass({
  displayName: 'Slider',
  render: function() {
    return (
      <div className="slider">
        <div className="wrap"> 
          <div className="slider-left">
            <em> </em>
            <h1>Premimum Design Graphic Resources Center</h1>
            <p>We Offer high quality design resources such as fonts, icons sets,web templates,backgrounds,and much more for <span>FREE!</span></p>
            <label>Join our mailling list & recevie a new freebie everday!</label>
            {/*
              <form>
                <input type="text" className="textbox" value="Email address.." />
                <input type="submit" value="Sign up" />
              </form>
            */}
          </div>
          <div className="slider-right">
            <img src="images/slider-img.png" alt="" />
          </div>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
});

module.exports = Slider;
