import { products } from "./products.js";

// Shopping cart
let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		cartNumbers(products[i]);
		expense(products[i]);
	});
}

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
		product.inCart += 1;
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

	if (cost !== null) {
		cost = parseInt(cost);
		localStorage.setItem("expense", cost + product.price);
	} else {
		localStorage.setItem("expense", product.price);
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
                <img src="/images/GameHub_covers${item.covers}_desktop.png" alt="Picture of game in cart">
                <span class="titleName">${item.name}</span>
                <div class="price">
                    ${item.price}kr
                </div>
                <div class="quantity">
                    <span>${item.inCart}</span>
                </div>
                <div class="total">
                    ${item.inCart * item.price}kr
                </div>
            </div>
            `;
		});
		productContainer.innerHTML += `
        <div class="totalContainer>
            <div class="sumCart"></div>
            <div class="sumCart">Cart Total ${cost}kr</div>
        </div>`;
	}
}

showCart();

// Save favorite game
let hearts = document.querySelectorAll(".heart-click");

for (let i = 0; i < hearts.length; i++) {
	hearts[i].addEventListener("click", () => {
		saveNumbers(products[i]);
	});
}

function loadHeartNumbers() {
	let heartNumbers = localStorage.getItem("saveNumbers");
	if (heartNumbers) {
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	}
}

function saveNumbers(products) {
	let heartNumbers = localStorage.getItem("saveNumbers");
	heartNumbers = parseInt(heartNumbers);

	if (heartNumbers) {
		localStorage.setItem("saveNumbers", heartNumbers + 1);
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	} else {
		localStorage.setItem("saveNumbers", 1);
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	}
	setItems(products);
}

function setItems(products) {
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
                <a href="/html/details.html?id=${item.id}"><img src="/images/GameHub_covers${item.covers}_desktop.png" alt="Picture of the game and click for more details"></a>
            </div>
            `;
		});
	}
}

showSaved();

// Display products/games on homepage

function gameShowProduct() {
	const pictures = document.querySelectorAll("div .prodPic");
	for (let y = 0; y < pictures.length; y++) {
		pictures[y].innerHTML = "";
		pictures[y].innerHTML += `
	<div class="gameProduct">
                <a href="/html/details.html?id=${products[y].id}" title="Click here for more details about the game ${products[y].name}"><img src="${products[y].image}" class="product-img alt="Picture of the game ${products[y].name} and click for more details""></a>
            </div>
	`;
	}
}
gameShowProduct();
