// Include React
var React = require("react");

var SavedArticle = require("./SavedArticle");

var Saved = React.createClass({
  render: function() {
    return (
      <div id="saved">
        <div className="container">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Saved Articles</h3>
              </div>
              <div className="panel-body text-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Saved;
