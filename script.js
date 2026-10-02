const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const greetButton = document.getElementById("greet-button");
const message = document.getElementById("message");

function generateGreeting(name, age) {
	let ageStatus;

	if (age >= 18) {
		ageStatus = "an adult";
	} else {
		ageStatus = "a minor";
	}

	return `Hello, ${name}! You are ${age} years old and you are ${ageStatus}.`;
}

greetButton.addEventListener("click", function () {
	const name = nameInput.value.trim();
	const age = Number(ageInput.value);

	if (name === "" || ageInput.value === "" || !Number.isInteger(age) || age < 0) {
		message.textContent = "Please enter a name and a valid age.";
		return;
	}

	message.textContent = generateGreeting(name, age);
});
