// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps GET /api/all
  app.get("/api/all", function (req, res) {
      connection.query("SELECT * FROM chirps;", function(err, data) {
            if (err) throw err;
            res.json(data);
    });
  });


  // Root get route.
// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM chirpes;", function(err, data) {
//     if (err) {
//       throw err;
//     }

//     // Test it.
//     // console.log('The solution is: ', data);

//     // Test it.
//     // res.send(data);

//     res.render("index", { chirpes: data });
//   });
// });

// // Post route -> back to home
// app.post("/", function(req, res) {
//   // Test it.
//   // console.log('You sent, ' + req.body.chirp);

//   // Test it.
//   // res.send('You sent, ' + req.body.chirp)

//   connection.query("INSERT INTO chirpes (chirp) VALUES (?)", [req.body.chirp], function(err, result) {
//     if (err) {
//       throw err;
//     }

//     res.redirect("/");
//   });
// });

  // Add a chirp POST /api/new

  app.post("/api/new", function(req, res) {
    console.log('You sent, ' + req.body.chirp);
    res.send('You sent, ' + req.body.chirp);
    connection.query("INSERT INTO chirps SET ?", [{
      author: req.body.author
    },{
      body: req.body.body
    }],
    function (err, result) {
      if (err) throw err;
      res.redirect("/api/all");
    });
  });
};
