// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){

  $(".delquote").on("click", function(event) {
    var id = $(this).data("quoteid");

    // Send the DELETE request.
    $.ajax("/quotes/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#createquote").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newquote = {
      author: $("#auth").val().trim(),
      quote: $("#quo").val().trim()
    };

    // Send the POST request.
    $.ajax("/quotes", {
      type: "POST",
      data: newquote
    }).then(
      function() {
        console.log("created new quote");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //$("#updatequote").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    //event.preventDefault();

   // var id = $("[name=id]").val().trim();

   // var updatedquote = {
     // quote: $("#updatequote [name=quote]").val().trim()
   // };

    // Send the PUT request.
   // $.ajax("/quotes/" + id, {
     // type: "PUT",
     // data: updatedquote
  //  }).then(
    //  function() {
      //  console.log("updated id ", id);
        // Reload the page to get the updated list
        //location.reload();
    //  }
   // );
 // });

  // jQuery event handlers should go here.
});
