// Display current day of the week
function displayDay() {
  var currentTime = dayjs().format("MMMM DD, YYYY");
  $("#currentDay").text(currentTime);
}

displayDay();

function eachHour() {
  $(".time-block").each(function() {
    var scheduledHour = parseInt($(this).attr("id"));

    // Ensure the current hour is read in integar
    var currentHour = parseInt(dayjs().hour());

      if (scheduledHour < currentHour) {
        $(this).addClass("past");
      }
      else if (scheduledHour === currentHour) {
          $(this).addClass("present");
      }
      else {
          $(this).addClass("future");
      }
  });
}

eachHour();

$(".saveBtn").on("click", function (event) {
  event.preventDefault();

  const scheduledEvent = $(this).siblings(".description").val();
  const time = $(this).parent().attr("id");

  localStorage.setItem(time, scheduledEvent);
});

// Loop through the time blocks and get their saved scheduled events
for (let i = 9; i < 18; i++) {
  const scheduledEvent = localStorage.getItem(i);
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

document.addEventListener("DOMContentLoaded", function() {
  // Generate a random index
  var randomIndex = Math.floor(Math.random() * quotes.length);

  // Access the quote object at the random index
  var randomQuote = quotes[randomIndex].quote;

  // Display the random quote in the footer
  var quoteElement = document.getElementById("encouragement");
  quoteElement.innerHTML = randomQuote;
});