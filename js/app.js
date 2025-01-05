"use strict";
const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".task-list");

// Function to add a new item to the list
function addTask() {
    if(inputBox.value === "") {
        alert("Please enter a task");
    } else{
        let li  = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let removeTask = document.createElement("img");
        removeTask.src = "images/x-icon.png";
        removeTask.width = "30";
        removeTask.height = "30";
        li.appendChild(removeTask);
        removeTask.addEventListener("click", function() {
            li.remove();
        });
        li.addEventListener("click", function() {
            li.classList.toggle("checked");
        });
    }
};