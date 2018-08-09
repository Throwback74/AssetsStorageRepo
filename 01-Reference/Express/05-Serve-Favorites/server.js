// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(url, req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/home.html", function(err, data) {
  
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
}

//Capture url of request
var path = req.url;
console.log(req.url);

switch(path) {

case "/": 
    return handleRequest(path, req, res);

case "/foods":
    return displayFoods(path, req, res);

case "/movies":
    return displayMovies(path, req, res);

case "/cssFrames":
    return displayFrameworks(url, req, res);

}


function displayFoods(url, req, res) {

    fs.readFile(__dirname + "/foods.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function displayMovies(url, req, res){

    fs.readFile(__dirname + "/movies.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function displayFrameworks(url, req, res){

    fs.readFile(__dirname + "/cssFrames.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}
// Starts our server
server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});
