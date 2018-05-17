// TRIVIA
// =============================

window.onload = function () {
    // when button clicked questions are shown...
   
    function myForm() {
        var x = document.getElementById("formation");
        if (x.style.display === "none") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    // Starts the countdown and begins the game

    $("#start").on("click", countdown);
   
   
   // Stops the countdown and ends the game

    $("#done").on("click", done);


    // Quiz array

    var quiz = [{
        question: "Georgetown is the capital of Alabama?", 
        answer: false,
        correct: "Montgomery",
    },{
        question: "Juneau is the capital of Alaska?",
        answer: true,
    },{
        question: "Phoenix is the capital of Arizona?", 
        answer: true,
    },{
        question: "Jonesboro is the capital of Arkansas?", 
        answer: false,
        correct: "Little Rock",
    },{
        question: "Sacramento is the capital of California?", 
        answer: true,
    },{
        question: "Avon is the capital of Colorado?", 
        answer: false,
        correct: "Denver",
    }];


    // writes questions

    $(".question0").text(quiz[0].question);
    $(".question1").text(quiz[1].question);
    $(".question2").text(quiz[2].question);
    $(".question3").text(quiz[3].question);
    $(".question4").text(quiz[4].question);
    $(".question5").text(quiz[5].question);

    
    // after user completes selections the outcome is determined


    // Creates an array of the correct answers 
    function testCheck() {
        var answersArray = [];
        for (var i = 0; i < (quiz.length); i++) {
            var answers = quiz[i].answer;
            answersArray.push(answers);
        }
        console.log(answersArray);
        return answersArray;
    }  
    // records user inputs
    // picks which radio buttons are checked
    function userSelection() {
        // var user = $('input[type=radio]:checked');
        // console.log(user);
        var userAnswers = [];
        for (var i = 0; i < 6; i++) {
            var user = document.getElementById("um" + i).checked;
            userAnswers.push(user);
        }
        console.log(userAnswers);
        return userAnswers;
    }
        
       
    function compare() {
        // testCheck();
        // userSelection();
        
        for (var i = 0; i < 6; i++) {
            if (document.getElementById("um"+i).checked !== quiz[i].answer) {
                $("#ans"+i).html("question" + (i+1) + " is wrong");
            }
            
        }
    
    }

    function done() {
        count = clearTimeout();
        $("#display").html("Done! Let's see how you did...");
        compare();
        var x = document.getElementById("formation");
            x.style.display = "none";

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

        myForm();
    }
    

};









