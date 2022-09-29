import { products } from "./products.js";

// Details game page
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
parseInt(id);

if (id === null) {
	location.href = "/index.html";
}

const images = document.querySelector(".imgContainer");
const title = document.querySelector(".title");
const condition = document.querySelector(".part-two ul");
const rating = document.querySelector(".details-game");
const price = document.querySelector(".part-two p");
const productDetails = document.querySelector(".paragraph p");

images.innerHTML += `<img src="/images/GameHub_covers${products[id - 1].covers}_desktop.png" alt="Picture of the game">
`;

title.innerHTML += `<h1>${products[id - 1].name}</h1>`;

condition.innerHTML += `<li>Condition: ${products[id - 1].condition}</li>
                        <li>Game type: Playbox</li>
						<li><a href="/html/information.html">Shipping details<i class="fas fa-truck"></a></i></li>
`;

rating.innerHTML += `${products[id - 1].stars}
<p> Rating <strong>${products[id - 1].rating}</strong></p>
`;

price.innerHTML += `${products[id - 1].price}kr`;

productDetails.innerHTML += `${products[id - 1].details}`;

// Add to cart
let cartDetails = document.querySelector(".cart1");

cartDetails.addEventListener("click", () => {
	cartNumbers(products[id - 1]);
	expense(products[id - 1]);
});

function loadCartNumbers() {
	let productNumbers = localStorage.getItem("cartNumbers");
	if (productNumbers) {
		document.querySelector("#cart span").textContent = productNumbers;
		document.querySelector(".cart-circle .fa-circle").style.visibility = "visible";
	}
}

function cartNumbers(product) {
	let productNumbers = localStorage.getItem("cartNumbers");
	productNumbers = parseInt(productNumbers);

	if (productNumbers) {
		localStorage.setItem("cartNumbers", productNumbers + 1);
		document.querySelector("#cart span").textContent = productNumbers + 1;
		document.querySelector(".cart-circle .fa-circle").style.visibility = "visible";
	} else {
		localStorage.setItem("cartNumbers", 1);
		document.querySelector("#cart span").textContent = 1;
		document.querySelector(".cart-circle .fa-circle").style.visibility = "visible";
	}
	setItemsCart(product);
}

function setItemsCart(product) {
	let cartItems = localStorage.getItem("gamesInCart");
	cartItems = JSON.parse(cartItems);

	if (cartItems !== null) {
		if (cartItems[product.name] === undefined) {
			cartItems = {
				...cartItems,
				[product.name]: product,
			};
		}
		cartItems[product.name].inCart += 1;
	} else {
		products.inCart += 1;
		cartItems = {
			[product.name]: product,
		};
	}
	localStorage.setItem("gamesInCart", JSON.stringify(cartItems));
}

loadCartNumbers();

function expense(product) {
	let cost = localStorage.getItem("expense");

	if (cost !== null) {
		cost = parseInt(cost);
		localStorage.setItem("expense", cost + product.price);
	} else {
		localStorage.setItem("expense", product.price);
	}
}

// Save game
let detailsHeart = document.querySelector(".details-heart");

detailsHeart.addEventListener("click", () => {
	detailsNumbers(products[id - 1]);
});

function loadHeartNumbersTwo() {
	let heartNumbers = localStorage.getItem("saveNumbers");
	if (heartNumbers) {
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	}
}

function detailsNumbers(product) {
	localStorage.setItem("saveNumbers", 1);
	let heartNumbers = localStorage.getItem("saveNumbers");
	heartNumbers = parseInt(heartNumbers);

	if (heartNumbers) {
		localStorage.setItem("saveNumbers", heartNumbers + 1);
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	} else {
		localStorage.setItem("saveNumbers", 1);
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	}
	setItems(product);
}

function setItems(product) {
	let saveItems = localStorage.getItem("saved");
	saveItems = JSON.parse(saveItems);

	if (saveItems !== null) {
		if (saveItems[product.name] === undefined) {
			saveItems = {
				...saveItems,
				[product.name]: product,
			};
		}
	} else {
		saveItems = {
			[product.name]: product,
		};
	}
	localStorage.setItem("saved", JSON.stringify(saveItems));
}

loadHeartNumbersTwo();
