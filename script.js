$(document).ready(function() {
  //var = function to call current moment/time
  var m = moment();

  // variables for on save button click
  var words
  var hourInfo;
  console.log(m.format("dddd, MMMM Do"));
  $("#currentDay").text(m.format("dddd, MMMM Do"));

  //Save function by listening for clicks on the save button
  $(".save").click(function() {
    var words = $(this)
      .siblings(".input")
      .val();
    console.log(words);

    hourInfo = $(this)
      .siblings(".hour")
      .text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));


  });

  function changeColor(){
      var currentTime = moment().hours();
      console.log("current time "+ currentTime);

    $
  }
  
});
