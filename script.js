$(document).ready(function() {
  //getting needed keys

  //var = function to call current moment/time
  var m = moment();

  // variables for on save button click
  var words;
  var hourInfo;

  //Appending Date to Page
  console.log(m.format("dddd, MMMM Do"));
  $("#currentDay").text(m.format("dddd, MMMM Do"));

  //function to make hours of day, cycles through the function, appending a new hour for each cycle

  for (var i = 9; i < 18; i++) {
    //to make the hours row, the var of "i" will be the hour appended.Also learned that you can use ${} to insert data into strings when the string starts with `. Helpful!
    var row = $(`<div data-time=${i} id='${i}' class='row'>`);
    //to make our Hour column
    var column1 = $('<div class="col-sm-1"> <p class="hour">' + formatAMPM(i) + '</p>')
    //to make our fillable column
    var column2 = $("<div class='col-sm-8 past'> <textarea id='text'" + i)
  }

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

    renderText();
    changeColor();
  });

  function renderText() {
    var saveWords9am = JSON.parse(localStorage.getItem("9am"));
    $("#9").val("");
    $("#9").val(saveWords9am);

    var saveWords10am = JSON.parse(localStorage.getItem("10am"));
    $("#10").val("");
    $("#10").val(saveWords10am);

    var saveWords11am = JSON.parse(localStorage.getItem("11am"));
    $("#11").val("");
    $("#11").val(saveWords11am);

    var saveWords12pm = JSON.parse(localStorage.getItem("12pm"));
    $("#12").val("");
    $("#12").val(saveWords12pm);

    var saveWords1pm = JSON.parse(localStorage.getItem("1pm"));
    $("#13").val("");
    $("#13").val(saveWords1pm);

    var saveWords2pm = JSON.parse(localStorage.getItem("2pm"));
    $("#14").val("");
    $("#14").val(saveWords2pm);

    var saveWords3pm = JSON.parse(localStorage.getItem("3pm"));
    $("#15").val("");
    $("#15").val(saveWords3pm);

    var saveWords4pm = JSON.parse(localStorage.getItem("4pm"));
    $("#16").val("");
    $("#16").val(saveWords4pm);

    var saveWords5pm = JSON.parse(localStorage.getItem("5pm"));
    $("#17").val("");
    $("#17").val(saveWords5pm);
  }

  renderText();
});

function changeColor() {
  var currentTime = moment().hours();
  var x = $(".hour");
  x.innerHTML;
}

changeColor();
