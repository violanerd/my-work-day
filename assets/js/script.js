// hold the tasks
var tasks = {};

// click save button, text entered into tasks 
// tasks gets updated in local storage

//task save was clicked
$(".save-btn").on("click", function(){
    var buttonRow = $(this).closest("div").attr('data-time');
    
    console.log(buttonRow);
});
//get data id attribute fom div
    //$("#buttonID").closest("[data-testing]")


// display current date
var date = moment().format('dddd, MMMM Do');
$(document).ready(function(){
    $("#currentDay").text(date);
});

