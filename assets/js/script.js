// hold the tasks
var tasks = [];



//task save was clicked
$(".save-btn").on("click", function(){
    
    // get the hour and the activity
    var div = $(this).closest("div");
    var hour = div.attr('data-time');
    var activity =div.children("textarea").val(); 
    console.log(hour, activity);

    // save in tasks array
    tasks.push([hour, activity]);
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
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
 //   for (var i=0; i<tasks.length; i++){
 //       var hour = tasks[i][0];
 //       var div = $("[data-time=").
 //   }

 //how to get the div with the hour information
    // loop through the tasks
    // use the hour to find the correct div
    // set text to that div - same as activity? 
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };