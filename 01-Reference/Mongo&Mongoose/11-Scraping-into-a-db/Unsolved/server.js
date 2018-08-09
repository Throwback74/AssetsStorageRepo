// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// TODO: make two more routes
// console.log("\n******************************************\n" +
//             "Grabbing every article headline and link\n" +
//             "from the SmashingMagazine website:" +
//             "\n******************************************\n");

// request("https://www.smashingmagazine.com/", function(error, response, html) {

//   // Load the HTML into cheerio and save it to a variable
//   // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
//   var $ = cheerio.load(html);

//   // An empty array to save the data that we'll scrape
//   var results = [];
//   var URL = "https://www.smashingmagazine.com/";
  
//   // Select each element in the HTML body from which you want information.
//   // NOTE: Cheerio selectors function similarly to jQuery's selectors,
//   // but be sure to visit the package's npm page to see how it works
//   $("h2.featured-article__title").each(function(i, element) {

//     var link = URL + $(element).children().attr("href");
//     var title = $(this).text();
// removed $(this).text(); 
//       // Save these results in an object that we'll push into the results array we defined earlier
//       results.push({
//         title: title,
//         link: link
//       });
//     });
    // Log the results once you've looped through each of the elements found with cheerio
    // console.log(results);
  // });
// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
app.get("/all", function(req, res) {
  db.scrapedData.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.send(found);
    }
  });
});
// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?
app.get("/scrape", function(req, res) {
  console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the SmashingMagazine website:" +
            "\n******************************************\n");
  request("https://www.smashingmagazine.com/", function(error, response, html) {
    var $ = cheerio.load(html);
    var results = [];
    var URL = "https://www.smashingmagazine.com/";

    $("h2.featured-article__title").each(function(i, element) {

      var link = URL + $(element).children().attr("href");
      var title = $(element).children().text();
      // $("#featured-article__title__a").text();
      var altTitle = $(element).find("a.featured-article__title__a").text();
      // var text = $("#blah p").contents(":not(span)").text();
      results.push({
        title: title,
        altTitle: altTitle,
        link: link
      });
    });
    console.log(results);
    db.scrapedData.insert(results);
    res.send("Data Scraped to MongoDB!");
});
});
/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
