
const button = document.querySelector("#ai-settings-btn");
const modal = document.querySelector("#ai-settings-modal");

const api = document.querySelector("#api-key");
const saveKey = document.querySelector("#save-api-key");
const closeButton = document.querySelector("#close-settings");

// Open modal
button.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// clode modal
closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// save the api key 
saveKey.addEventListener("click", () => {
    const apiKey = api.value.trim();

    if (!apiKey) {
        alert("Please enter a valid API Key");
        return;
    }

    sessionStorage.setItem("groqApiKey", apiKey);

    alert("Your API Key is saved successfully!");

    modal.classList.add("hidden");
});

// get api key
function getApi() {
    return sessionStorage.getItem("groqApiKey");
}