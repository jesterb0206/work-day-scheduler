var m = moment();

var currentDate = moment().format('dddd') + ", " + moment().format("MMMM Do, YYYY");
var currentHour = moment().format('h:mm:ss a');


var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);

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

$(".clearDayBtn").on("click", function(){

    localStorage.clear();
    renderText()

});

function renderText () {

    var saveEventText1 = JSON.parse(localStorage.getItem("09:00 AM"));
    $("#9").val("");
    $("#9").val(saveEventText1);
    
    var saveEventText2 = JSON.parse(localStorage.getItem("10:00 AM"));
    $("#10").val("");
    $("#10").val(saveEventText2);
    
    var saveEventText3 = JSON.parse(localStorage.getItem("11:00 AM"));
    $("#11").val("");
    $("#11").val(saveEventText3);
    
    var saveEventText4 = JSON.parse(localStorage.getItem("12:00 PM"));
    $("#12").val("");
    $("#12").val(saveEventText4);
    
    var saveEventText5 = JSON.parse(localStorage.getItem("01:00 PM"));
    $("#13").val("");
    $("#13").val(saveEventText5);

    var saveEventText6 = JSON.parse(localStorage.getItem("02:00 PM"));
    $("#14").val("");
    $("#14").val(saveEventText6);

    var saveEventText7 = JSON.parse(localStorage.getItem("03:00 PM"));
    $("#15").val("");
    $("#15").val(saveEventText7);

    var saveEventText8 = JSON.parse(localStorage.getItem("04:00 PM"));
    $("#16").val("");
    $("#16").val(saveEventText8);

    var saveEventText9 = JSON.parse(localStorage.getItem("05:00 PM"));
    $("#17").val("");
    $("#17").val(saveEventText9);

};

function autoReload () {

    var current = new Date();
    var future = new Date();
    future.setTime(future.getTime() + 3600000); //3600000 = 1 hour
    future.setMinutes(0);
    future.setSeconds(0);

    var timeout = (future.getTime() - current.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);

};