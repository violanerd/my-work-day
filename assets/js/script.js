
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
    var getTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!getTasks) {
        getTasks = tasks; 
    }
    else {
        
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
    saveTasks();    
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
    // iterate through Object to update divs
    var keys = Object.keys(tasks);
    hour = hour + "00";
    console.log("moment", hour);
    var same ="";
    var after="";
    var hourToGetDiv ="";
    var divEl = "";
    for (var i=0; i<keys.length; i++){
        // 
        var Objhour = keys[i];
        after = (moment(hour).isAfter(Objhour));
        same = (moment(hour).isSame(Objhour));
        if (same){
            var hourToGetDiv = "#" + Objhour;
            var divEl = $(hourToGetDiv);
            textArea = divEl.children("textarea");
            textArea.removeClass("future");
            textArea.addClass("present");
        } 
        if (after) {
            hourToGetDiv = "#" + Objhour;
            divEl = $(hourToGetDiv);
            console.log(divEl);
            textArea = divEl.children("textarea");
            textArea.removeClass("future");
            textArea.addClass("past");
        }
    } 
}
    // logic for only certain hours, how to get it to work functionally whole day -- do I need to?

setInterval(timeOfTasks, 1000 * 60);