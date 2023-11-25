// 1 Shipping
const fullName = document.querySelector("#fullname");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const phone = document.querySelector("#telephone");

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
phone.onkeyup = function () {
	const len6 = event.target.value.length;
	if (len6 >= 8) {
		phoneError.style.display = "none";
	} else {
		phoneError.style.display = "block";
	}
};

// 2. Transaction
const cardNumber = document.querySelector("#card-number");
const nameCard = document.querySelector("#name-card");
const expireDate = document.querySelector("#expire-date");
const cvv = document.querySelector("#cvv");

cardNumber.onkeyup = function () {
	const len6 = event.target.value.length;
	if (len6 >= 16) {
		numberError.style.display = "none";
	} else {
		numberError.style.display = "block";
	}
};
nameCard.onkeyup = function () {
	const len6 = event.target.value.length;
	if (len6 >= 5) {
		holderError.style.display = "none";
	} else {
		holderError.style.display = "block";
	}
};
expireDate.onkeyup = function () {
	const len6 = event.target.value.length;
	if (len6 >= 5) {
		expireError.style.display = "none";
	} else {
		expireError.style.display = "block";
	}
};
cvv.onkeyup = function () {
	const len6 = event.target.value.length;
	if (len6 >= 3) {
		cvvError.style.display = "none";
	} else {
		cvvError.style.display = "block";
	}
};
