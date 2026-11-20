const button = document.querySelector("#ai-settings-button");
const modal = document.querySelector("#ai-modal-settings");

button.addEventListener("click",() =>{
	modal.classList.remove("hidden");
}
)
const api = document.querySelector("api-key");
const saveKey = document.querySelector("save-api-key");
saveKey.addEventListener("click", () => {
	const apiKey = api.value.trim();

	if(!apiKey)
	{
		alert("enter a valid api key");
		return;
	}
	localStorage.setItem("groqApi", apiKey);
	alert("your api is entered sucessufully");
});




