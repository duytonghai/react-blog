var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var data = require('../database/data');

var Article = require('./Article');
var Slider = require('./Slider');
var Quote = require('./Quote');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <Quote />
        <Slider />
        <Article />
      </div>
    );
  }
});

module.exports = Home;
