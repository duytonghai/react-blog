var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var data = require('../database/data');

var Header = require('./Header');
var Article = require('./Article');
var Slider = require('./Slider');
var Quote = require('./Quote');
var Footer = require('./Footer');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Quote />
        <Slider />
        <Article />
        <Footer />
      </div>
    );
  }
});

module.exports = Home;
