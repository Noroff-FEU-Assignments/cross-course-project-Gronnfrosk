// Display products/games on homepage
const url = "https://gronnfrosk.one/gamehub/wp-json/wc/store/products?per_page=20";

async function gameShowProduct() {
	const picture = document.querySelectorAll(".prodPic");
	const response = await fetch(url);
	const products = await response.json();

	for (let i = 0; i < picture.length; i++) {
		picture[i].innerHTML += `
	<div class="gameProduct">
                <a href="/html/details.html?id=${products[i].id}" title="Click here for more details about the game"><img src="${products[i].images[0].src}" class="product-img alt="Picture of the game and click for more details""></a>
            </div>
	`;
	}
}
gameShowProduct();

// Shopping cart
let carts = document.querySelectorAll(".add-cart");

async function fetchGames() {
	const response = await fetch(url);
	const products = await response.json();

	for (let i = 0; i < carts.length; i++) {
		carts[i].addEventListener("click", () => {
			cartNumbers(products[i]);
			expense(products[i]);
		});
	}
}
fetchGames();

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
		cartItems[product.name].parent += 1;
	} else {
		product.parent += 1;
		cartItems = {
			[product.name]: product,
		};
	}
	localStorage.setItem("gamesInCart", JSON.stringify(cartItems));
}

loadCartNumbers();

// total cost cart
function expense(product) {
	let cost = localStorage.getItem("expense");
	product.prices.price = parseInt(product.prices.price);

	if (cost !== null) {
		cost = parseInt(cost);
		localStorage.setItem("expense", cost + product.prices.price);
	} else {
		localStorage.setItem("expense", product.prices.price);
	}
}

// Checkout page
function showCart() {
	let cartItems = localStorage.getItem("gamesInCart");
	cartItems = JSON.parse(cartItems);
	let productContainer = document.querySelector(".products");
	let cost = localStorage.getItem("expense");

	if (cartItems && productContainer) {
		productContainer.innerHTML = "";
		Object.values(cartItems).map((item) => {
			productContainer.innerHTML += `
		    <div class="product">
                <img src="${item.images[0].src}" alt="Picture of game in cart">
                <span class="titleName">${item.name}</span>
                <div class="price">
                    ${item.prices.price}kr
                </div>
                <div class="quantity">
                    <span>${item.parent}</span>
                </div>
                <div class="total">
                    ${item.parent * item.prices.price}kr
                </div>
            </div>
            `;
		});
		productContainer.innerHTML += `
        <div class="totalContainer>
		<div class="sumCart"></div>
            <div class="sumCart">Cart Total ${cost}kr</div>
        </div>
		`;
	}
}

showCart();

// Save favorite game
let hearts = document.querySelectorAll(".heart-click");

async function fetchSavedGames() {
	const response = await fetch(url);
	const products = await response.json();

	for (let i = 0; i < hearts.length; i++) {
		hearts[i].addEventListener("click", () => {
			saveNumbers(products[i]);
		});
	}
}

fetchSavedGames();

function loadHeartNumbers() {
	let heartNumbers = localStorage.getItem("saveNumbers");
	if (heartNumbers) {
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	}
}

function saveNumbers(product) {
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

loadHeartNumbers();

// Save page
function showSaved() {
	let saveItems = localStorage.getItem("saved");
	saveItems = JSON.parse(saveItems);
	let gameContainer = document.querySelector(".gameSavedList");

	if (saveItems && gameContainer) {
		gameContainer.innerHTML = "";
		Object.values(saveItems).map((item) => {
			gameContainer.innerHTML += `
		    <div class="gameSaved">
                <a href="/html/details.html?id=${item.id}"><img src="${item.images[0].src}" alt="Picture of the game and click for more details" class="product-img"></a>
            </div>
            `;
		});
	}
}

showSaved();
