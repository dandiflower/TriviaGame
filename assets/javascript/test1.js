  // Set the date we're counting down to


  // Find the distance between now an the count down date
  var distance = 36000;

// Update the count down every 1 second
    var x = setInterval(function () {



  // Time calculations for days, hours, minutes and seconds

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("display").innerHTML = seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("display").innerHTML = "EXPIRED";
  }
}, 1000);

setInterval();