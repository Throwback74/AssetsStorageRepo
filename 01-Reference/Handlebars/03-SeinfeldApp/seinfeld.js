// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password",
  database: "seinfeld_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
// If the main route is hit, then we send instructions to the page
app.get("/", function(req, res) {
  var welcome = "<h1>Welcome to the Seinfeld Actors Database, please add /cast, /coolness-chart, or /attitude/{ENTER YOUR CHOICE IN ATTITUDE HERE} to the url to get started </h1>";
  res.send(welcome);
});
  
  // If the main route is hit, then we initiate a SQL query to grab all records.
app.get("/cast", function(req, res) {
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM actors", function(err, result) {
    var html = "<h1> The Seinfeld Cast Database </h1>";

    html += "<ul>";

    for(var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p> Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);

  });
});

app.get("/coolness_chart", function(req, res) {
  connection.query("SELECT * FROM actors", function(err, result) {
    var htmlC = "<h1> The Seinfeld Cast Database Coolness Chart </h1>";

    htmlC += "<ul>";

    for(var i = 0; i < result.length; i++) {
      htmlC += "<li><p> Name: " + result[i].name + "</p>";
      htmlC += "<p> Coolness: " + result[i].coolness_points + "</p></li>";

    }

    htmlC += "</ul>";

    res.send(htmlC);
  });
});


app.get("/attitude/:att", function(req, res) {
  
  var att = req.params.att;
  console.log(att);
  connection.query("SELECT * FROM actors where attitude = ?", [{
    attitude: att
  }], function(err, result) {
    
    var htmlA = "<h1> Actors with an Attitude of " + att + " </h1>";

    htmlA += "<ul>";

    for(var i = 0; i < result.length; i++) {
      htmlA += "<li><p> ID: " + result[i].id + "</p>";
      htmlA += "<p> Name: " + result[i].name + "</p>";
      htmlA += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      htmlA += "<p> Attitude: " + result[i].attitude + "</p></li>";
    }

    htmlA += "</ul>";

    res.send(htmlA);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});