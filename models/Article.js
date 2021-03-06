// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // headline is a required string
  title: {
    type: String,
    required: true
  },
  // summary is a required string
  date: {
    type: Date,
    required: true
  },
  // url is a required string
  url: {
    type: String,
    required: true,
    unique: true
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
