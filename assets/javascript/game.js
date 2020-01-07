


$(document).ready(function () {

  var random = "";

  // ... we generate a random number
  var random = Math.floor(Math.random() * 120) + 19;
  console.log(random)
  // ... and then dump the random number into our rando div.
  $('.rando').text(random);

});

 


  $(document).ready(function () {

  var jewelOne = "";
  var jewelTwo = "";
  var jewelThree = "";
  var jewelFour = "";

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


  $("#one").click(function () {
    $('.guessBox').text(jewelOne);
    console.log(jewelOne)
  });


  $("#two").click(function () {
    $('.guessBox').text(jewelTwo);
    console.log(jewelTwo)
  });

  $("#three").click(function () {
    $('.guessBox').text(jewelThree);
    console.log(jewelThree)
  });

  $("#four").click(function () {
    $('.guessBox').text(jewelFour);
    console.log(jewelFour)
  });

  
});


  var wins = 0;
  var losses = 0;
  var numGuesses = 0;

 
  $(document).ready(function () {
  // wins and losses

  if (numGuesses() === random()) {
    wins++;
    alert("You won");
    //update the HTML 
    $('.winBox').text(wins);

  }



  else if (numGuesses > random) {
    losses++;
    alert("You lost!");

    $("lossBox").text(losses);

  }



});

$(document).ready(function () {
// reset game function
$("#reset").click(function () {
  $(resetGAME());

  var resetGAME = ready();
  
});

});





//  create function that generates a random number and drops it into the randomNumber/rando box DONE

// create a button out of each gem image

// create a function that assigns each image a random number between 1-12

// create a function that adds up each random integer into the guessbox

// if guess total goes over the random number, they lose, add one to losses  DONE

// the player wins if they get the same number as the randonumb, add one to wins DONE

// create reset button