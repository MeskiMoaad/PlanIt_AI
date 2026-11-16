
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

const tasks = data.tasks || [];

// Clear containers
todoContainer.innerHTML = "";
progressContainer.innerHTML = "";
doneContainer.innerHTML = "";

tasks.forEach((item) => {
    const p = document.createElement("p");

   p.textContent = `\nTask: ${item.title}  - \nPriority: ${item.priority}`;
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

        p.draggable = true;
        p.id = item.id;

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }
        p.addEventListener("dragstart", drag);
    });
//drag && drop functionnalities
    function allowDrop(ev) {
        ev.preventDefault();
    }
    function drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    todoContainer.addEventListener("dragover", allowDrop)
    progressContainer.addEventListener("dragover", allowDrop)
    doneContainer.addEventListener("dragover", allowDrop)

    todoContainer.addEventListener("drop", drop)
    progressContainer.addEventListener("drop", drop)
    doneContainer.addEventListener("drop", drop)


// Update counters
todoCount.textContent = todoContainer.children.length;
progressCount.textContent = progressContainer.children.length;
doneCount.textContent = doneContainer.children.length;
