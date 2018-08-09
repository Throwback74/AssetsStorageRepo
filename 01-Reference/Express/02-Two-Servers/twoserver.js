// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT2 = 7500;

//Random Phrase generator
var randomSelector = (Math.floor(Math.random() * 10) + 1);

var phraseArray = ['1. The quick brown fox jumps over the lazy dog.', '2. My Mum tries to be cool by saying that she likes all the same things that I do.', '3. If the Easter Bunny and the Tooth Fairy had babies would they take your teeth and leave chocolate for you?', '4. A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.', '5. What was the person thinking when they discovered cow’s milk was fine for human consumption… and why did they do it in the first place!?', '6. Last Friday in three week’s time I saw a spotted striped blue worm shake hands with a legless lizard.', '7. Wednesday is hump day, but has anyone asked the camel if he’s happy about it?', '8. If Purple People Eaters are real… where do they find purple people to eat?', '9. A song can make or ruin a person’s day if they let it get to them.', '10. Sometimes it is better to just walk away from things and go back to them later when you’re in a better frame of mind.'];

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url + " Good job! You're a genius!");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  
});

function handleRequest2(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end(phraseArray[randomSelector] + " \n You know you don't understand what you just did :-P");
  }

var server2 = http.createServer(handleRequest2);
// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
    console.log(randomSelector);
    console.log(phraseArray[randomSelector]);
});