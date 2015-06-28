var _ = require('lodash');
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var data = require('../database/data');

var Home = React.createClass({
  render: function() {
    var categories = data.categories.data;
    var menu = [];

    _.forEach(categories, function(category) {
      menu.push(<div key={category.id}>{category.name_vn}</div>);
    });

    return (
      <div>
        {menu}
      </div>
    );
  }
});

module.exports = Home;
