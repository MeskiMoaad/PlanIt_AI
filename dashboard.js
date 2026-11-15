
const data = JSON.parse(localStorage.getItem("currentProject")) || {};

const projectName = document.querySelector("#projet");
const projectHours = document.querySelector("#hours");

const todoContainer = document.querySelector("#to-do");
const progressContainer = document.querySelector("#in-progress");
const doneContainer = document.querySelector("#done");

const todoCount = document.querySelector("#todo-count");
const progressCount = document.querySelector("#progress-count");
const doneCount = document.querySelector("#done-count");

projectName.textContent = data.projectName || "Untitled Project";

projectHours.textContent = `${data.totalEstimatedHours ?? 0} hours`;

// Get tasks
const tasks = data.tasks || [];

// Clear containers
todoContainer.innerHTML = "";
progressContainer.innerHTML = "";
doneContainer.innerHTML = "";

// Render tasks
tasks.forEach((item) => {
    const p = document.createElement("p");

   p.textContent = `Task: ${item.title}  \nPriority: ${item.priority}`;
    p.className = "bg-gray-100 p-3 rounded-lg shadow-sm";

    if (item.status === "To Do") {
        todoContainer.appendChild(p);
    } 
    else if (item.status === "In Progress") {
        progressContainer.appendChild(p);
    } 
    else if (item.status === "Done") {
        doneContainer.appendChild(p);
    }
});

// Update counters
todoCount.textContent = todoContainer.children.length;
progressCount.textContent = progressContainer.children.length;
doneCount.textContent = doneContainer.children.length;
