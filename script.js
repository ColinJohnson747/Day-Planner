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
    var column1 = $('<p class="hour">' + formatTime(i) + "</p>");
    //to make our fillable column
    var column2 = $(
      `<textarea id=text${i} class="entry col-sm-9 past"></textarea>`
    );
    //to make our savebutton column
    var column3 = $(
      `<button class="btn btn-primary btn-lg col-sm-1 id=${i}></button`
    );

    //now we just append these columns to the above row
    row.append(column1);
    row.append(column2);
    row.append(column3);

    //and then we append those rows to the container
    $(".container").append(row);

    //and grab any saved info for i
    getLocalStorage(i);
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

  

function changeColor() {
  var currentTime = moment().hours();
  var x = $(".hour");
  x.innerHTML;
}

changeColor();
