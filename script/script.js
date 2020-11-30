let message = "";
let className = "";
outputMessage(message);

document.getElementById("getLink").addEventListener("click", function () {
	getLink();
	outputMessage(message, className);
});

function getLink() {
	const inputField = document.getElementById("inputLink");
	const inputLink = inputField.value;
	const searchStr = "comments/";

	if (inputLink.includes("reddit.") && inputLink.includes(searchStr)) {
		const startIndex = inputLink.indexOf(searchStr) + searchStr.length;
		const endIndex = inputLink.indexOf("/", startIndex);
		const resourceIdentifier = inputLink.substring(startIndex, endIndex);

		const outputLink = `https://www.reddit.com/mediaembed/${resourceIdentifier}`;

		copyToClipboard(outputLink);
		inputField.value = "";

		message = "Copied to clipboard!";
		className = "text-success";
	} else {
		inputField.value = "";
		message = "please provide a valid link";
		className = "text-danger";
	}

	return message, className;
}

function copyToClipboard(text) {
	let dummy = document.createElement("input");
	document.body.appendChild(dummy);
	dummy.value = text;
	dummy.select();
	document.execCommand("copy");
	document.body.removeChild(dummy);
}

function outputMessage(message, className) {
	const getLinkHelp = document.getElementById("getLinkHelp");
	if (arguments[1] != "") {
		getLinkHelp.classList.add(className);
	}
	getLinkHelp.innerHTML = message;
}
