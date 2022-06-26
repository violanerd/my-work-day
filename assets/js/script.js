// hold the tasks
var tasks = {
    "0900": "",
    "1000": "",
    "1100": "",
    "1200": "",
    "1300": "",
    "1400": "",
    "1500": "",
    "1600": "",
    "1700": "" 
};



//task save was clicked
$(".save-btn").on("click", function(){
    
    // get the hour and the activity
    var div = $(this).closest("div");
    var hour = div.attr('data-time');
    var activity =div.children("textarea").val(); 
    // save in tasks array
    tasks[hour]= activity;

    // tasks gets updated in local storage
    saveTasks();
});



// display current date
var date = moment().format('dddd, MMMM Do');
$(document).ready(function(){
    $("#currentDay").text(date);
});

loadTasks();

function loadTasks () {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    var keys = Object.keys(tasks);
    for (var i=0; i<keys.length; i++){
        // if there is an activity, update it
        var hour = keys[i];
        var activity = tasks[hour];
        
        if (activity){
            hour = "#" + hour;
            var divEl = $(hour);
            textArea = divEl.children("textarea");
            textArea.val(activity);
        }
    }
}


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

function timeOfTasks () {
// get the mins of the current hour
    var mins = moment().format("mm");
    if (mins === "00"){
        alert("Tis a new hour");
    }
    var hour = moment().format("HH");
    updateTasks(hour);
// if a new hour, update the tasks
// remove the current class

// check task hour against hour

}

function updateTasks (hour) {
    // have to iterate through div blocks somehow.... 
    var keys = Object.keys(tasks);
    hour = hour + "00";
    console.log("moment", hour);
    for (var i=0; i<keys.length; i++){
        // 
        var Objhour = keys[i];
        if (moment(Objhour).isAfter(hour)) {
            console.log("my data", Objhour);
            var hourToGetDiv = "#" + hour;
            var divEl = $(hourToGetDiv);
            textArea = divEl.children("textarea");
            textArea.removeClass("future");
            textArea.addClass("past");
        }
    }
    // this is not working as expected. 
}
setInterval(timeOfTasks, 1000 * 60);