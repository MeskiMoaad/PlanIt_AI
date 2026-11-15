console.log("Dashboard JS loaded");

console.log("Stored project:", localStorage.getItem("currentProject"));
fetch("./sample-plan.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to load JSON");
        }

        return response.json();
    })
    .then(data => {
        console.log("Data received");
        console.log(data);
        localStorage.setItem("currentProject", JSON.stringify(data));
        console.log("saved", localStorage.getItem("currentProject"))
        console.log(data.projectName);
        console.log(data.tasks.length);
        console.log("Project saved successfully");
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });