// hold the tasks
var tasks = [];



//task save was clicked
$(".save-btn").on("click", function(){
    
    // get the hour and the activity
    var div = $(this).closest("div");
    var hour = div.attr('data-time');
    var activity =div.children("textarea").val(); 

    // save in tasks array
    tasks.push([hour, activity]);

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
            console.log(hour, activity, divEl, textArea);
        }
    }    
}
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