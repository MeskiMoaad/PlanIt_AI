if (!localStorage.getItem("currentProject")) {
    fetch("./sample-plan.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON");
            }

            return response.json();
        })
        .then(data => {
            localStorage.setItem("currentProject", JSON.stringify(data));
            console.log("Demo project initialized");
        })
        .catch(error => console.error(error));
}