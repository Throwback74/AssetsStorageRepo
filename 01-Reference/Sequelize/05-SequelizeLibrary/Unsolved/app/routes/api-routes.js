// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;

// Routes
// =============================================================
module.exports = function(app) {
  
  
  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results) {
      // results are available to us inside the .then
      return res.json(results);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    Book.findAll({
      where: {
        title: req.params.book
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    Book.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    Book.findAll({
      where: {
        author: req.params.author
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {

    Book.findAll({
      where: {
        pages: {[Op.gte]: 150}
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    Book.findAll({
      where: {
        pages: {[Op.lte]: 149}
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
  // Take the request...
    var book = req.body;

    Book.create({
      title: book.title,
      author: book.author,
      genre: book.genre,
      pages: book.pages
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    Book.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(results) {
      res.json(results);
    }).catch(function(err) {
      res.json(err);
    });
  });

};
