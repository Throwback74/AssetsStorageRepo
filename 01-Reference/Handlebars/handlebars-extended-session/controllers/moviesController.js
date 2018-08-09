var express = require("express");

var router = express.Router();

var movie = require("../models/movie.js");

router.get("/", function (req, res) {
    movie.findAll(function (data) {
        res.render("index", { movie: data });
    });
});

router.post("/api/movies", function (req, res) {
    movie.create(
        [
            "title", "rating"
        ],
        [
            req.body.title, req.body.rating
        ],
        function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
})

// Export routes for server.js to use.
module.exports = router;