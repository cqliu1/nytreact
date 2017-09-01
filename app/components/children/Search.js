// Include React
var React = require("react"); 

var Search = React.createClass({
  render: function() {
    return (
      <div className="search">

      {/* This code will dump the correct Child Component */}
      {this.props.children}

      </div>
    );
  }
});

module.exports = Search;
