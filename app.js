var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");
var emptyMessage = document.getElementById("emptyMessage");


// Add Task
addBtn.addEventListener("click", addTask);


// Add task when Enter is pressed
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function addTask() {

    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    var li = document.createElement("li");
    li.classList.add("task");


    // Create task text
    var span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = taskText;


    // Mark task as completed
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });


    // Create delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";


    // Delete task
    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateEmptyMessage();
    });


    // Add elements to list
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);


    // Clear input
    taskInput.value = "";

    updateEmptyMessage();
}


// Show/hide empty message
function updateEmptyMessage() {

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}