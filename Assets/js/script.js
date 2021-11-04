$(currentDay).text(moment().format("[Today is] dddd, MMMM Do YYYY"));

$(".saveBtn").on("click", function () {
    console.log($(this))
    var text = $(this).siblings(".description").val();
    var time= $(this).parent().attr("id");
    
    localStorage.setItem(time, text)
});

$(".time-block").each(function () {
    var savedData = $(this).attr("id");
    var showData = localStorage.getItem(savedData);
    if (showData !== null) {
        $(this).children(".description").val(showData);
    }
});

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