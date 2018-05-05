// TRIVIA
// =============================

$(document).ready(function () {
  
  
  
  
  $("#start").on("click", countdown);


  $("#stop").on("click", done);

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
  
 
// Stops the countdown and ends the game

$("#done").on("click", done);

function done() {
   
  clearTimeout("#display");

    $("#display").html("Done!");

  
}
  // Quiz array

var quiz = [{
    question: "Is Montgomery is the capital of Alabama?", 
    answer: false,
},{
    question: "Is Juneau is the capital of Alaska?",
    answer: true,
},{
    question: "Is Phoenix is the capital of Arizona?", 
    answer: true,
},{
    question: "Is Little Rock is the capital of Arkansas?", answer: false,
},{
    question: "Is Sacramento is the capital of California?", answer: true,
},{
    question: "Is Denver is the capital of Colorado?", 
    answer: false,
}];

  


  // Ask question

  $("#question0").text(quiz[0].question);
  $("#question1").text(quiz[1].question);
  $("#question2").text(quiz[2].question);
  $("#question3").text(quiz[3].question);
  $("#question4").text(quiz[4].question);
  $("#question5").text(quiz[5].question);

});