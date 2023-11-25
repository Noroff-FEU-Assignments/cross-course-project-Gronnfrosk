// Details game page
const images = document.querySelector(".imgContainer");
const title = document.querySelector(".title");
const condition = document.querySelector(".part-two ul");
const rating = document.querySelector(".details-game");
const price = document.querySelector(".part-two p");
const productDetails = document.querySelector(".paragraph p");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
parseInt(id);

const url = "https://gronnfrosk.one/gamehub/wp-json/wc/store/products/" + id;

async function fetchGame() {
	const response = await fetch(url);
	const products = await response.json();

	images.innerHTML += `<img src="${products.images[0].src}" alt="Picture of the game">`;

	title.innerHTML += `<h1>${products.name}</h1>`;

	condition.innerHTML += `<li>Condition: ${products.categories[0].name}</li>
	                        <li>Game type: Playbox</li>
							<li><a href="/html/information.html">Shipping details<i class="fas fa-truck"></a></i></li>
	`;

	price.innerHTML += `${products.prices.price}kr`;

	productDetails.innerHTML += `${products.description}`;
}

fetchGame();

if (id === null) {
	location.href = "/index.html";
}

// Add to cart
let cartDetails = document.querySelector(".cart1");

async function fetchGames() {
	const response = await fetch(url);
	const products = await response.json();
	console.log(products);

	cartDetails.addEventListener("click", () => {
		cartNumbers(products[id]);
		expense(products[id]);
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
			if (cartItems[products.name] === undefined) {
				cartItems = {
					...cartItems,
					[products.name]: products,
				};
			}
			cartItems[products.name].parent += 1;
		} else {
			products.parent += 1;
			cartItems = {
				[products.name]: products,
			};
		}
		localStorage.setItem("gamesInCart", JSON.stringify(cartItems));
	}

	loadCartNumbers();

	function expense(product) {
		let cost = localStorage.getItem("expense");
		products.prices.price = parseInt(products.prices.price);

		if (cost !== null) {
			cost = parseInt(cost);
			localStorage.setItem("expense", cost + products.prices.price);
		} else {
			localStorage.setItem("expense", products.prices.price);
		}
	}
}
fetchGames();
// Save game
let detailsHeart = document.querySelector(".details-heart");

async function fetchSavedGames() {
	const response = await fetch(url);
	const products = await response.json();

	detailsHeart.addEventListener("click", () => {
		detailsNumbers(products[id]);
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
			if (saveItems[products.name] === undefined) {
				saveItems = {
					...saveItems,
					[products.name]: products,
				};
			}
		} else {
			saveItems = {
				[products.name]: products,
			};
		}
		localStorage.setItem("saved", JSON.stringify(saveItems));
	}

	loadHeartNumbersTwo();
}
fetchSavedGames();
