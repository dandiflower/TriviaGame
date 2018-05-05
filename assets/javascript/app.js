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
  // Quiz constructor
  function quizConstructor(question, answer, enabled) {
    this.question = question;
    this.answer = answer;
    this.enabled = enabled;

  // Create quiz array
  var quiz = Array();

  // All quiz questions and answers
  quiz[0] = quizConstructor("Is Montgomery is the capital of Alabama", false, 0);
  quiz[1] = quizConstructor("Is Juneau is the capital of Alaska", true, 0);
  quiz[2] = quizConstructor("Is Phoenix is the capital of Arizona", true, 0);
  quiz[3] = quizConstructor("Is Little Rock is the capital of Arkansas", false, 0);
  quiz[4] = quizConstructor("Is Sacramento is the capital of California", true, 0);
  quiz[5] = quizConstructor("Is Denver is the capital of Colorado", false, 0);
  quiz[6] = quizConstructor("Is Hartford is the capital of Connecticut", false, 0);
  quiz[7] = quizConstructor("Is Dover is the capital of Delaware", false, 0);
  quiz[8] = quizConstructor("Is Tallahassee is the capital of Florida", false, 0);
  quiz[9] = quizConstructor("Is Atlanta is the capital of Georgia", true, 0);


  // Ask question
  var QA = quiz[0].question;

    $("#question").html(quiz);

    console.log(quiz);

};

