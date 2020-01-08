


$(document).ready(function () {

  var random = "";

  // ... we generate a random number
  var random = Math.floor(Math.random() * 120) + 19;
  console.log(random)
  // ... and then dump the random number into our rando div.
  $('.rando').text(random);


  var currentScore = 0;
  var wins = 0;
  var losses = 0;

  var jewelOne ;
  var jewelTwo ;
  var jewelThree;
  var jewelFour ;

  // ... we generate a random number for the 4 crystals and send it to the jewel image
  var jewelOne = Math.floor(Math.random() * 12 + 1);
  $('.one').hide(jewelOne);

  var jewelTwo = Math.floor(Math.random() * 12 + 1);
  $('.two').hide(jewelTwo);

  var jewelThree = Math.floor(Math.random() * 12 + 1);
  $('.three').hide(jewelThree);

  var jewelFour = Math.floor(Math.random() * 12 + 1);
  $('.four').hide(jewelFour);


  // When you click a jewel, it sends the number to the guesses box
   // numGuesses = the total of what the users numbers came to, STILL NEED FUNCTION !!!!!!

   $(document).ready(function () {
  $("#one").click(function () {
    $('.guessBox').text(jewelOne);
    console.log(jewelOne)
    addValues(jewelOne)
  });


  $("#two").click(function () {
    $('.guessBox').text(jewelTwo);
    console.log(jewelTwo)
    addValues(jewelTwo)
  });

  $("#three").click(function () {
    $('.guessBox').text(jewelThree);
    console.log(jewelThree)
    addValues(jewelThree)
  });

  $("#four").click(function () {
    $('.guessBox').text(jewelFour);
    console.log(jewelFour)
    addValues(jewelFour)
  });

   });


   var addValues = function(numGuesses) {
     console.log(numGuesses)
    // Change currentScore
    currentScore += numGuesses;
    // Change the HTML to reflect changes in currentScore
    $(".guessBox").text(currentScore);
    // Call the checkWin Function
    checkWin();
    // Testing Console
    console.log("Your Score: " + currentScore);
  };



 

 
  // wins and losses

  function checkWin() {
  if (currentScore === random) {
    wins++;
    alert("You won");
    //update the HTML 
    $(".winBox").text(wins);
    resetGAME()

  }



  else if (currentScore > random) {
    losses++;
    alert("You lost!");

    $(".lossBox").text(losses);
    resetGAME()

  }}






// reset game function
function resetGAME(){
    var random = "";

    // ... we generate a random number
    var random = Math.floor(Math.random() * 120) + 19;
    console.log(random)
    // ... and then dump the random number into our rando div.
    $('.rando').text(random);
  
    
    
  
    var jewelOne ;
    var jewelTwo ;
    var jewelThree;
    var jewelFour ;
  
    // ... we generate a random number for the 4 crystals and send it to the jewel image
    var jewelOne = Math.floor(Math.random() * 12 + 1);
    $('.one').hide(jewelOne);
  
    var jewelTwo = Math.floor(Math.random() * 12 + 1);
    $('.two').hide(jewelTwo);
  
    var jewelThree = Math.floor(Math.random() * 12 + 1);
    $('.three').hide(jewelThree);
  
    var jewelFour = Math.floor(Math.random() * 12 + 1);
    $('.four').hide(jewelFour);
  
  
}

  
  
});







//  create function that generates a random number and drops it into the randomNumber/rando box DONE

// create a button out of each gem image

// create a function that assigns each image a random number between 1-12

// create a function that adds up each random integer into the guessbox

// if guess total goes over the random number, they lose, add one to losses  DONE

// the player wins if they get the same number as the randonumb, add one to wins DONE

// create reset button