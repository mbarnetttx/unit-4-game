// <!-- Here we have div called "randomNumber" where our random number will go -->



var random = "";
  
      $(document).ready(function (){

 // ... we generate a random number
      var random = Math.floor(Math.random() * 12) + 1;
      console.log(random)


      // ... and then dump the random number into our random-number div.
      $('.rando').text(random);
      })
  ;
  
 