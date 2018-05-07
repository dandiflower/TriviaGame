// TRIVIA
// =============================

$(document).ready(function () {
    // when button clicked ...
   
   // Starts the countdown and begins the game

    $("#start").on("click", countdown);
   
   // Stops the countdown and ends the game

    $("#done").on("click", done);


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
        question: "Is Little Rock is the capital of Arkansas?", 
        answer: false,
    },{
        question: "Is Sacramento is the capital of California?", 
        answer: true,
    },{
        question: "Is Denver is the capital of Colorado?", 
        answer: false,
    }];


    // writes questions

    $(".question0").text(quiz[0].question);
    $(".question1").text(quiz[1].question);
    $(".question2").text(quiz[2].question);
    $(".question3").text(quiz[3].question);
    $(".question4").text(quiz[4].question);
    $(".question5").text(quiz[5].question);

    // Creates an array of the correct answers 
    function testCheck() {
        for (i = 0; i < (quiz.length); i++) {
            var answersArray = [];
            var answers = quiz[i].answer;
            answersArray.push(answers);
            // console.log(answersArray);
        }
    }  

    testCheck();


});

// records user inputs
// picks which radio buttons are checked
function userSelection() {
    // var user = $('input[type=radio]:checked');
    // console.log(user);
    for (var i = 0; i<3; i++) {
        var userAnswers = [];
        var user = document.getElementById("um"+i).checked;
        userAnswers.push(user);
        console.log(userAnswers);
    }
}



function done() {
    count = clearTimeout();
    $("#display").html("Done! Let's see how you did...");
}


// timer object
var count = 20;

function countdown() {
    setTimeout(countdown, 1000); //1000 will run it every 1 second
    $("#display").html(count);
    count--;

    if (count < 0) {
        //counter ended
        $("#display").html("You ran out of time!");
    }
}


