
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
$(".saveBtn").on("click", function(){
  
    // get the hour and the activity
    var div = $(this).closest("div");
    console.log(div);
    var hour = div.attr('data-time');
    console.log(hour);
    var activity =div.children("textarea").val(); 
    // save in tasks array
    console.log(activity);
    
    tasks[hour]= activity;
    console.log(tasks);
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
        
        var keys = Object.keys(getTasks);
        for (var i=0; i<keys.length; i++){
            // if there is an activity, update it
            var hour = keys[i];
            var activity = getTasks[hour];
            // set the object with the task at the hour
            tasks[hour]= activity;
            // update the html if there is a task
            if (activity){
                hour = "#" + hour;
                var divEl = $(hour);
                textArea = divEl.children("textarea");
                textArea.val(activity);
            }
        }
    }
    saveTasks();
    timeOfTasks();    
}

// add to local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

function timeOfTasks () {
// get the mins of the current hour
    var mins = moment().format("mm");
    if (mins === "00"){
        // give an alert the hour has changed!
        alert("Tis a new hour");
    }
    var hour = moment().format("HH");
    updateTasks(hour);
}

function updateTasks (hour) {
    // iterate through Object to update divs
    var keys = Object.keys(tasks);
    hour = hour + "00";
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
            textArea = divEl.children("textarea");
            textArea.removeClass("future");
            textArea.removeClass("present");
            textArea.addClass("past");
        }
    } 
}

// check the time, update if needed
setInterval(timeOfTasks, 1000 * 60);