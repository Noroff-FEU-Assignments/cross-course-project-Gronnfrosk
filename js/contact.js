const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const characterCount = document.querySelector(".character-count span");

fullName.onkeyup = function () {
	const len = event.target.value.length;
	if (len >= 5) {
		fullNameError.style.display = "none";
	} else {
		fullNameError.style.display = "block";
	}
};
email.onkeyup = function () {
	const len1 = event.target.value.length;
	if (len1 >= 5) {
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
	}
};
message.onkeyup = function () {
	const len2 = event.target.value.length;
	characterCount.innerHTML = len2;
	if (len2 >= 25) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
};
