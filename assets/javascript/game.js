// <!-- Here we have div called "randomNumber" where our random number will go -->



var random = "";
  
      $(document).ready(function (){

 // ... we generate a random number
      var random = Math.floor(Math.random() * 120) + 19;
      console.log(random)


      // ... and then dump the random number into our random-number div.
      $('.rando').text(random);
      })
  ;
  
//  create function that generates a random number and drops it into the randomNumber/rando box

// create a button out of each gem image

// create a function that assigns each image a random number between 1-12

// create a function that adds up each random integer, 