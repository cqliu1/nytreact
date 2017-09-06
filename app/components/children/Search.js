// Include React
var React = require("react"); 

var Query = require("./Query");
var Results = require("./Results");
var Saved = require("./Saved");

var Search = React.createClass({
  render: function() {
    return (
      <div id="search">
	      <Query />
	      <Results />
	      <Saved />
	      {/* This code will dump the correct Child Component */}
	      {this.props.children}

      </div>
    );
  }
});

module.exports = Search;
