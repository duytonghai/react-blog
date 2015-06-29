var React = require('react');

var Home = require('../components/Home');

var Template = require('./template');

function Index() {}

Index.prototype.load = function(callback) {
  var home = React.renderToString(<Home />);

  new Template('../index.html').render({
    app: home
  }, callback);
};

module.exports = Index;
