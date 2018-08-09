$(document).ready(function(){
/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?
// Create a variable called order_ID that keeps track of the order the items are supposed to be in, this will change depending on how the mongodb sort function retreives the data, and indicates which way to pull the data into the table. Orrrr....push the data into an array based on its sorted position and use the index position in order to pull it out and overwrite the table.
  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
      removed row - // table += "<td>" + data[i]._id + "</td>";
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
var setActive = function(colHead) {
  $(colHead).addClass("active");
};
// var removeActive = function(colHead) {
//   $(colHead).removeClass("active");
// };
// var checkActive = function(colHead) {
//   $(colHead).hasClass("active");
// };


function displayResults(data) {
  // Add to the table here...
  var tbody = $(tbody).html();
  for(var i = 0; i < data.length; i++) {
    tbody += "<tr>";

    tbody += "<td>" + data[i].name + "</td>";
    tbody += "<td>" + data[i].numLegs + "</td>";
    tbody += "<td>" + data[i].class + "</td>";
    tbody += "<td>" + data[i].weight + "</td>";
    tbody += "<td>" + data[i].whatIWouldReallyCallIt + "</td>";
    tbody += "</tr>";
  }
  return tbody;
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  
  var newTable = displayResults(data);
  $("#tableBod").append(newTable);
  
});

$("#name-sort").click(function() {
$.getJSON("/name", function(data) {
  // Call our function to generate a table body
  // $("#tableBod").
  $("#results > #tableBod").html("");
  var newTable = displayResults(data);
  $("#tableBod").append(newTable);
  setActive("#animal-name");
  $("#animal-weight").removeClass("active");
  // if(checkActive("#animal-weight") === true) {
  //   removeActive("#animal-weight");
  // }else {
  //   console.log("nothing is active");
  // }
});
});

$("#weight-sort").click(function() {

  $.getJSON("/weight", function(data) {
    // Call our function to generate a table body
    $("#results > #tableBod").html("");
    var newTable = displayResults(data);
    $("#tableBod").append(newTable);
    setActive("#animal-weight");
    $("#animal-name").removeClass("active");
    // if(checkActive("#animal-name") === true) {
    //   removeActive("#animal-name");
    // }
  });
});
});