// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "?";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(topic, startYear, endYear) {

    // Figure out the geolocation
    queryURL += "q=" + topic;
    if( startYear.length > 0 )
      queryURL += "&begin_date=" + startYear + "0101";
    if( endYear.length > 0 )
      queryURL += "&end_date=" + endYear + "0101";

    return axios.get(queryURL).then(function(response) {
      return reponse;
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticles: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postArticle: function(location) {
    return axios.post("/api/saved", {  });
  },

  // This function posts new searches to our database.
  deleteArticle: function(location) {
    return axios.delete("/api/saved", {  });
  },
};

// We export the API helper
module.exports = helper;
