// <!-- Here we have div called "randomNumber" where our random number will go -->



var random = "";

$(document).ready(function () {

     // ... we generate a random number
     var random = Math.floor(Math.random() * 120) + 19;
     console.log(random)


     // ... and then dump the random number into our random-number div.
     $('.rando').text(random);
})
     

var wins = 0;
var losses = 0;




// wins and losses

    if(numGuesses() === random()){
      wins++;
      alert("You won");
      //update the HTML 
      $('.winBox').text(wins)

    
  
  else if (numGuesses > random ){
      losses++;
      alert("You lost!");

      $("lossBox").text(losses)
  }


  // assign each jewel a random number between 0-12
var jewelNumb = "";

$(document).ready(function () {

  // ... we generate a random number
  var jewelNumb = Math.floor(Math.random() * 12) + 0;
  $('.gemImage').text(jewelNumb)
}

// assign each jewel a jewelNumb





 

    

//  create function that generates a random number and drops it into the randomNumber/rando box DONE

// create a button out of each gem image

// create a function that assigns each image a random number between 1-12

// create a function that adds up each random integer into the guessbox

// if guess total goes over the random number, they lose, add one to losses

// the player wins if they get the same number as the randonumb, add one to wins

// create reset button