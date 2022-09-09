var showDay = moment().format('LLLL');
$('#currentDay').text(showDay);
var savedMsg = $("#saved-local-msg");
var currentHour = moment().hours();
// var currentHour = 12;
console.log(currentHour)

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
        savedMsg.html("Your content added with <code>localStorage</code> ✅");
        savedMsg.attr("style", "text-align: center; font-size: 12px");
    });
    $("#hour-09 .description").val(localStorage.getItem("hour-09"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));



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