$(document).ready(function() {
  //var = function to call current moment/time
  var m = moment();

  // variables for on save button click
  var words;
  var hourInfo;
  console.log(m.format("dddd, MMMM Do"));
  $("#currentDay").text(m.format("dddd, MMMM Do"));



  //Save function by listening for clicks on the save button
  $('#save').click(function(){
    var entry = $(this).siblings(".input").val();
    console.log(entry);

  })














});
