var saveBtn = document.querySelector('.saveBtn');
var event = document.querySelector('.event');

$("#currentDay").text(moment().format("[Today is] dddd, MMMM Do YYYY"));

$(".saveBtn").click(function () {
    console.log($(this));
    console.log($(".saveBtn"));
    var time = $(this).parent().attr("id");
    var textarea = $(this).siblings(".textarea").val();
    localStorage.setItem(time, textarea);
})

