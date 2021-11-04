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

