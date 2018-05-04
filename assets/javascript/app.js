// TRIVIA
// =============================

$(document).ready(function () {
  
  
  
  
  $("#start").on("click", timer);


  $("#stop").on("click", stop);
  $("#true").on("click", );
  $("#false").on("click", );

  

// //  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// // prevents the clock from being sped up unnecessarily
var clockRunning = false;

// // Our timer object
var count = 30;

function timer() {

  var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
   count = count - 1;
   if (count <= 0) {
     clearInterval(counter);
     //counter ended
     return;
   }
  //  console.log(count);
  $("#display").html(count);
   //Do code for showing the number of seconds here
 }
 
if (!clockRunning) {
  intervalId = setInterval(timer.count);
  clockRunning = true;
}

  
// Stops the timer and ends the game

function stop() {

    // DONE: Change the "display" div to "00"
    $("#display").text("00");
  }

});