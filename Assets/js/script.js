// Displays the current date
$(currentDay).text(moment().format("[Today is] dddd, MMMM Do YYYY"));

// Saves an event to the local storage
$(".saveBtn").on("click", function () {    
    var text = $(this).siblings(".description").val();
    var time= $(this).parent().attr("id");
    
    localStorage.setItem(time, text)
});

// Displays saved events from local storage
$(".time-block").each(function () {
    var savedData = $(this).attr("id");
    var showData = localStorage.getItem(savedData);
    if (showData !== null) {
        $(this).children(".description").val(showData);
    }
});

// Indicates if a time-block is past, present or future
function timeIndicator() {    
    time = moment().hours();

    $(".time-block").each(function () {
        var currentTime = parseInt($(this).attr("id"));

        if (currentTime > time) {
            $(this).removeClass(["past", "present"]);
            $(this).addClass("future");
        }
        else if (currentTime === time) {
            $(this).removeClass(["past", "future"]);
            $(this).addClass("present");
        }
        else {
            $(this).removeClass(["present", "future"]);
            $(this).addClass("past");
        }
    });
}

timeIndicator();