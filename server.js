// DEPENDENCIES
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// var request = require("request");

// Models
var Article = require("./models/Article");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// establish connection to models

// Initialize Express
var app = express();
var port = process.env.PORT || 3000;

// Configure app with morgan and body parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// Static file support with public folder
app.use(express.static("public"));

// Database configuration for mongoose
// db: newsscraper
mongoose.connect("mongodb://localhost/nytreact");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
// ======

app.get("/api/saved", function(req, res) {
  Article.find()
    .exec( function(err, articles) {
      res.send(articles);
    });
});

app.post("/api/saved", function(req, res) {
  Article.create(req.body)
    .exec( function(err, articles) {
      res.send("Article was saved!");
    });
});

app.delete("/api/saved", function(req, res) {
  Article.remove({_id: mongoose.Types.ObjectId(req.body)})
    .exec( function(err, articles) {
      res.send("Article was deleted!");
    });
});

app.get("*", function(req, res) {
  app.get('*', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
  });
});

// Listen on port
app.listen(port, function() {
  console.log("App running on port 3000!");
});
