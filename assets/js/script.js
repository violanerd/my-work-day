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
    console.log(hour, activity);
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
    
    if (!tasks) {
        var tasks = [];
    } else {
        for (var i=0; i<tasks.length; i++){
            var hour = tasks[i][0];
            var activity = tasks[i][1];
            var divEl = document.getElementById(hour);
            var textArea = divEl.children[1];
            textArea.textContent = activity;
        }
    }
    console.log(tasks);    
}

// loading tasks works fine. When I save a new task, the array is deleted... 

// tried the above in JQuery and I was not able to get it to work... 
// for (var i=0; i<tasks.length; i++){
//         var hour = tasks[i][0];
//         var activity = tasks[i][1];
//         var divEl = document.getElementById(hour);
//         var kids = divEl.children[1]; // this is javascript, don't know why jquery doesnt work
//         console.log(kids);
//         //div.children("textarea").val(activity);            
        


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
// var hour = moment().add(5, 'hours').format("HH");
// console.log(hour + "00");
}

function updateTasks (hour) {
    // have to iterate through div blocks somehow.... 
    
    
    
    // format to get element by id
    hour = "#" + hour + "00";
    var divEl = $(hour);
    textArea = divEl.children("textarea");
    // change classes
    textArea.removeClass("future");
    textArea.addClass("past");
}
setInterval(timeOfTasks, 1000 * 60);