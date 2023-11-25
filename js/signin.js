const form = document.querySelectorAll("#profileForm");
const mail = document.querySelector("#mail");
const passw = document.querySelector("#passw");
const signInButton = document.querySelector("#signInButton");
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const zip = document.querySelector("#zip");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const phone = document.querySelector("#telephone");
const pass = document.querySelector("#pass");
const confirmPassword = document.querySelector("#confirmPassword");
const button = document.querySelector("#btn");

mail.onkeyup = function () {
	const leng = event.target.value.length;
	if (leng >= 5) {
		somethingError.style.display = "none";
	} else {
		somethingError.style.display = "block";
	}
};
passw.onkeyup = function () {
	const lengt = event.target.value.length;
	if (lengt >= 7) {
		passwError.style.display = "none";
	} else {
		passwError.style.display = "block";
	}
};

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
address.onkeyup = function () {
	const len2 = event.target.value.length;
	if (len2 >= 5) {
		addressError.style.display = "none";
	} else {
		addressError.style.display = "block";
	}
};
zip.onkeyup = function () {
	const len3 = event.target.value.length;
	if (len3 >= 4) {
		zipError.style.display = "none";
	} else {
		zipError.style.display = "block";
	}
};
city.onkeyup = function () {
	const len4 = event.target.value.length;
	if (len4 >= 3) {
		cityError.style.display = "none";
	} else {
		cityError.style.display = "block";
	}
};
country.onkeyup = function () {
	const len5 = event.target.value.length;
	if (len5 >= 5) {
		countryError.style.display = "none";
	} else {
		countryError.style.display = "block";
	}
};
phone.onkeyup = function () {
	const len6 = event.target.value.length;
	if (len6 >= 8) {
		phoneError.style.display = "none";
	} else {
		phoneError.style.display = "block";
	}
};
pass.onkeyup = function () {
	const len7 = event.target.value.length;
	if (len7 >= 7) {
		passError.style.display = "none";
	} else {
		passError.style.display = "block";
	}
};

confirmPassword.onkeyup = function () {
	const pw1 = document.querySelector("#pass");
	const pw2 = document.querySelector("#confirmPassword");
	if (pw1.value != pw2.value) {
		confPasswordError.style.display = "block";
		return false;
	} else {
		confPasswordError.style.display = "none";
		return true;
	}
};
