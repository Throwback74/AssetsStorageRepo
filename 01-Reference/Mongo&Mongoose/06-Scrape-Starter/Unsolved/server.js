// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var request = require("request");

// First, tell the console what server2.js is doing
console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the SmashingMagazine website:" +
            "\n******************************************\n");

// Make a request call to grab the HTML body from the site of your choice
request("https://www.smashingmagazine.com/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  var URL = "https://www.smashingmagazine.com/";

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("h2.featured-article__title").each(function(i, element) {
    // console.log(element);
    
    var link = URL + $(element).children().attr("href");
    var title = $(this).text();
    
    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link
      // author: author,
      // image: image
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
