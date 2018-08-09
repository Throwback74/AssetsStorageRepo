$(document).ready(function(){
    $("#movie-form").on("submit", function(e){
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "/api/movies",
            data: {
                title: $("#movie-title").val().trim(),
                rating: $("#movie-rating").val().trim()
            }
        }).then(function(data){
            if(data) {
                console.log(data);
                location.reload();
            } else {
                alert("Something went wrong");
            }
        });
    });
});