$(document).ready(function() {
  //getting needed keys

  //var = function to call current moment/time
  var m = moment();

  // variables for on save button click
  var words;
  var hourInfo;

  //grabs stored info
  function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
      $(`#text${key}`).text(value);
    }
  }

  //Appending Date to Page
  function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
      $(`#text${key}`).text(value);
    }
  }
  //function to make hours of day, cycles through the function, appending a new hour for each cycle

  for (var i = 9; i < 18; i++) {
    //to make the hours row, the var of "i" will be the hour appended.Also learned that you can use ${} to insert data into strings when the string starts with `. Helpful!
    var row = $(`<div data-time=${i} id='${i}' class='row'>`);
    //to make our Hour column
    var column1 = $('<p class="hour col-1">' + formatTime(i) + "</p>");
    //to make our fillable column
    var column2 = $(
      $(
        `<textarea id=text${i} class="description col-10 past" placeholder="Add your event here..."></textarea>`
      )
    );
    //to make our savebutton column
    var column3 = $(
      `<button class="btn btn-primary btn-lg col-1 saveBtn" id=${i}>Save</button>`
    );

    var column4 = $("</hr>");
    //now we just append these columns to the above row
    row.append(column1);
    row.append(column2);
    row.append(column3);

    //and then we append those rows to the container
    $(".container").append(row);

    $(".row").append(column4);

    //and grab any saved info for i
    getLocalStorage(i);
  }

  //function for converting time from 24 hr to 12hr.
  function formatTime(hours) {
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ampm;
  }
  formatTime();

  //Save function by listening for clicks on the save button

  function updateColors() {
    var currentTime = new Date().getHours();
    for (var i = 9; i < 18; i++) {
      console.log(currentTime, $(`#${i}`).data("time"));
      if ($(`#${i}`).data("time") === currentTime) {
        $(`#text${i}`).addClass("present");
      } else if (currentTime < $(`#${i}`).data("time")) {
        $(`#text${i}`).addClass("future");
      }
    }
  }

  setInterval(function() {
    updateColors();
  }, 1000);

  var saveBtn = $(".saveBtn");
  saveBtn.on("click", function() {
    let eventId = $(this).attr("id");
    let eventText = $(this)
      .parent()
      .siblings()
      .children(".description")
      .val();
    localStorage.setItem(eventId, eventText);
  });

  
});
