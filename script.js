// Display current day of the week
function displayDay() {
  var currentTime = dayjs().format("MMMM DD, YYYY");
  $("#currentDay").text(currentTime);
}

displayDay();

// For each hour passed, the time block will change color whether the item is past, present, or future
function eachHour() {

  // Go through and change for each time block
  $(".time-block").each(function() {

    // Ensure the time block id is read in integar
    var scheduledHour = parseInt($(this).attr("id"));

    // Ensure the current hour is read in integar
    var currentHour = parseInt(dayjs().hour());

      // If the scheduled hour is less than the current hour, color change to grey
      if (scheduledHour < currentHour) {
        $(this).addClass("past");
      }

      // Else if the scheduled hour is equal to the current hour, color change to red
      else if (scheduledHour === currentHour) {
          $(this).addClass("present");
      }

      // Else, color change to green
      else {
          $(this).addClass("future");
      }
  });
}

eachHour();

// Save button is clickable and able to store user's event inputs
$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  // Take the save button's sibling, description, value
  const scheduledEvent = $(this).siblings(".description").val();

  // Take the save button's parent, id
  const time = $(this).parent().attr("id");

  // Store the time and scheduled events
  localStorage.setItem(time, scheduledEvent);
});

// Loop through the time blocks and get their saved scheduled events
for (let i = 9; i < 18; i++) {
  const scheduledEvent = localStorage.getItem(i);

  // $(`#9 .description`).val(scheduledEvent);
  $(`#${i} .description`).val(scheduledEvent);
}

var quotes = [
  {
    quote: `"The key is not to prioritize what's on your schedule, but to schedule your priorities." - Stephen Covey`
  },

  {
    quote: `"Tough times never last, but tough people do." - Robert H. Schuller`
  },

  {
    quote: `"The best thing about the future is that it comes one day at a time." - Abraham Lincoln`
  },

  {
    quote: `"To achieve great things, two things are needed; a plan, and not quite enough time." - Leonard Bernstein`
  },

  {
    quote: `"The shorter way to do many things is to only do one thing at a time." - Mozart`
  },
];

// Manipulate the DOM to load and parse object
document.addEventListener("DOMContentLoaded", function() {
  // Generate a random index
  var randomIndex = Math.floor(Math.random() * quotes.length);

  // Access the quote object at the random index
  var randomQuote = quotes[randomIndex].quote;

  // Display the random quote in the footer
  var quoteElement = document.getElementById("encouragement");
  quoteElement.innerHTML = randomQuote;
});