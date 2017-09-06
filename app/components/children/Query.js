// Include React
var React = require("react");

var Query = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { topic: "", startYear: "", endYear: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    
    this.setState({ term: event.target.value });

  },

  // When a user submits
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ term: "" });
  },

  render: function() {
    return (
      <div id="query">
        <div className="container">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
              </div>
              <div className="panel-body text-center">
                <form action="#" method="POST">
                  <div className="form-group">
                    <label>Topic</label>
                    <input type="text" className="form-control" required name="topic" value={this.state.topic}/>
                  </div>
                  <div className="form-group">
                    <label>Start Year (Optional)</label>
                    <input type="text" className="form-control" name="startYear" />
                  </div>
                  <div className="form-group">
                    <label>End Year (Optional)</label>
                    <input type="text" className="form-control" name="endYear" />
                  </div>
                  <button type="submit" className="btn btn-default">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Query;
