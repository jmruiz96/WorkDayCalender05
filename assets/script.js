var showDay = moment().format('LLLL');
$('#currentDay').text(showDay);

var currentHour = moment().hours();
// var currentHour = parseInt("12")
console.log(currentHour)

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });
    $("#hour-09 .description").val(localStorage.getItem("hour-09"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-01 .description").val(localStorage.getItem("hour-01"));
    $("#hour-02 .description").val(localStorage.getItem("hour-02"));
    $("#hour-03 .description").val(localStorage.getItem("hour-03"));
    $("#hour-04 .description").val(localStorage.getItem("hour-04"));
    $("#hour-05 .description").val(localStorage.getItem("hour-05"));



//worry about saveing later
function timeUpdater () {
    $(".time-row").each(function (){
       var rowHour = parseInt($(this).attr("id").split("-")[1]);
    
       if (rowHour < currentHour) {
        $(this).addClass( "past");

       } else if (rowHour === currentHour) {
        // $(this).attr("class", "present");
        $(this).removeClass("past");
        $(this).addClass("present");

       } else {
        // $(this).attr("class", "future")
        // the attr screwed up the classes so i had to add and remove class
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
       }

    })
}
timeUpdater();
});