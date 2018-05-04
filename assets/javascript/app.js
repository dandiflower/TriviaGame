// TRIVIA
// =============================

$(document).ready(function () {
  
  
  
  
  $("#start").on("click", countdown);


  // $("#stop").on("click", done);

  // $(".pick").on("click", truthy);
  // $("#false").on("click", truthy);

// function truthy() {
//   $(this).css('background-color', 'gray');
//   var k = this.value;
//   console.log(k)
// }



// timer object
var count = 30;

function countdown() {
  setTimeout(countdown, 1000); //1000 will run it every 1 second
  $("#display").html(count);
  count--;

  if (count < 0) {
    //counter ended
    $("#display").html("You ran out of time!");
  }
}
  
 
// Stops the timer and ends the game

$("#done").on("click", done);

function done() {
  clearTimeout("#display");
    $("#display").html("Done!");
    // DONE:
    return;
}




});