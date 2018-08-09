// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
          Character.findAll({
            where: {
              routeName: req.params.characters
            }
          }).then(function(data) {
            return res.json(data);
          });
    }
    else {
      // Otherwise display the data for all of the characters.
      Character.findAll({}).then(function(results) {
        // results are available to us inside the .then
        return res.json(results);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    
    // Take the request...
    var character = req.body;
    var routeName = character.name.replace(/\s+/g, "").toLowerCase();
    console.log(routeName);

    Character.create({
      routeName: routeName,
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      forcePoints: req.body.forcePoints
    }).then(function(results) {
      res.json(results);
    });
  });
};
