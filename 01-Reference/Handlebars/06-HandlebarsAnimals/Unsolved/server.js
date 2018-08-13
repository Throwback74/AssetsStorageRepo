var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
  res.render("dog", animals[0]);
});

app.get("/all-animals", function(req, res) {

  res.render("index", {animalArr: animals});
});



app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  var arr = [];
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  for(var i = 0; i < animals.length; i++) {
    if(animals[i].pet === true) {
      arr.push(animals[i]);
    }
  }
  res.render("index", {animals: arr});
});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.
  var _arr = [];
  for(var i = 2; i < animals.length; i++) {
    if(animals[i].pet === true) {
      _arr.push(animals[i]);
    }
    res.render("index", {animals: _arr});
  }
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});