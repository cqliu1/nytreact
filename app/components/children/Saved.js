// Include React
var React = require("react");

var Saved = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body text-center">
              <form action="/api/saved" method="POST">
                <div className="form-group">
                  <label>Topic</label>
                  <input type="text" className="form-control" name="topic" />
                </div>
                <div className="form-group">
                  <label>Start Year</label>
                  <input type="text" className="form-control" name="startYear" />
                </div>
                <div className="form-group">
                  <label>End Year</label>
                  <input type="text" className="form-control" name="endYear" />
                </div>
                <button type="submit" className="btn btn-default">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Saved;
