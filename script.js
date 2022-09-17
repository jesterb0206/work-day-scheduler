var m = moment();

$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss A"));

$(document).ready( function() {

    colorChange ();
    renderText();
    
});

function colorChange () {
    
    var currentTime = moment().hours();
    console.log("Current Time" + currentTime);

    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));
        console.log(scheduledTime);

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });

}

var eventText;
var eventTime;

$(".saveBtn").click(function() {

    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});

  $(".deleteBtn").click(function() {

        eventText = $(this).siblings(".input").val("");
        eventText = $(this).siblings(".input").val();
        eventTime = $(this).siblings(".hour").text();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
  
    colorChange ();
    renderText ();

});

function renderText () {

    var saveEventText1 = JSON.parse(localStorage.getItem("09:00 AM"));
    $("#1").val("");
    $("#1").val(saveEventText1);
    
    var saveEventText2 = JSON.parse(localStorage.getItem("10:00 AM"));
    $("#2").val("");
    $("#2").val(saveEventText2);
    
    var saveEventText3 = JSON.parse(localStorage.getItem("11:00 AM"));
    $("#3").val("");
    $("#3").val(saveEventText3);
    
    var saveEventText4 = JSON.parse(localStorage.getItem("12:00 PM"));
    $("#4").val("");
    $("#4").val(saveEventText4);
    
    var saveEventText5 = JSON.parse(localStorage.getItem("01:00 PM"));
    $("#5").val("");
    $("#5").val(saveEventText5);

    var saveEventText6 = JSON.parse(localStorage.getItem("02:00 PM"));
    $("#6").val("");
    $("#6").val(saveEventText6);

    var saveEventText7 = JSON.parse(localStorage.getItem("03:00 PM"));
    $("#7").val("");
    $("#7").val(saveEventText7);

    var saveEventText8 = JSON.parse(localStorage.getItem("04:00 PM"));
    $("#8").val("");
    $("#8").val(saveEventText8);

    var saveEventText9 = JSON.parse(localStorage.getItem("05:00 PM"));
    $("#9").val("");
    $("#9").val(saveEventText9);

};

$("#clearDay").on("click", function(){
    localStorage.clear();
    initPage()
})