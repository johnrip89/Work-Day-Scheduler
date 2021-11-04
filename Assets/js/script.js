$(currentDay).text(moment().format("[Today is] dddd, MMMM Do YYYY"));

$(".saveBtn").on("click", function () {
    console.log($(this))
    var text = $(this).siblings(".description").val();
    var time= $(this).parent().attr("id");
    
    localStorage.setItem(time, text)
});

