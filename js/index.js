let products = [
	{
		name: "Assassin",
		category: "popular game",
		condition: "new",
		rating: 4,
		price: 500,
		inCart: 0,
		covers: 5,
	},
	{
		name: "Racing",
		category: "popular game",
		condition: "new",
		rating: 5,
		price: 500,
		inCart: 0,
		covers: 7,
	},
	{
		name: "Boxer",
		category: "popular game",
		condition: "new",
		rating: 4,
		price: 500,
		inCart: 0,
		covers: 8,
	},
	{
		name: "Space War",
		category: "Pre-order game",
		condition: "new",
		price: 600,
		inCart: 0,
		covers: 6,
	},
	{
		name: "Cyberpunk",
		category: "Pre-order game",
		condition: "new",
		price: 600,
		inCart: 0,
		covers: 9,
	},
	{
		name: "Forge Legends",
		category: "Pre-order game",
		condition: "new",
		price: 600,
		inCart: 0,
		covers: 10,
	},
	{
		name: "Super Duper",
		category: "Brand new",
		condition: "new",
		rating: 4,
		price: 500,
		inCart: 0,
		covers: 2,
	},
	{
		name: "Black",
		category: "popular game",
		condition: "new",
		rating: 4,
		price: 500,
		inCart: 0,
		covers: 3,
	},
	{
		name: "Furious",
		category: "popular game",
		condition: "new",
		rating: 5,
		price: 500,
		inCart: 0,
		covers: 4,
	},
	{
		name: "Assassin",
		category: "Pre-used game",
		condition: "used",
		rating: 4,
		price: 400,
		inCart: 0,
		covers: 5,
	},
	{
		name: "Furious",
		category: "Pre-used game",
		condition: "used",
		rating: 5,
		price: 400,
		inCart: 0,
		covers: 4,
	},
	{
		name: "Boxer",
		category: "Pre-used game",
		condition: "used",
		rating: 4,
		price: 400,
		inCart: 0,
		covers: 8,
	},
];

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
	console.log(cartItems);
	if (cartItems !== null) {
		if (cartItems[product.name] === undefined) {
			cartItems = {
				...cartItems,
				[product.name]: product,
			};
		}
		cartItems[product.name].inCart += 1;
	} else {
		product.inCart = 1;
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
                <img src="/images/GameHub_covers${item.covers}_desktop.png">
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
let hearts = document.querySelectorAll("#heart");

for (let i = 0; i < hearts.length; i++) {
	hearts[i].addEventListener("click", () => {
		saveNumbers(products[i]);
	});
}
function loadHeartNumbers() {
	let heartNumbers = localStorage.getItem("saveNumbers");
	if (heartNumbers) {
		document.querySelector(".heart span").textContent = heartNumbers;
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	}
}

function saveNumbers(products) {
	let heartNumbers = localStorage.getItem("saveNumbers");
	heartNumbers = parseInt(heartNumbers);

	if (heartNumbers) {
		localStorage.setItem("saveNumbers", heartNumbers + 1);
		document.querySelector(".heart span").textContent = heartNumbers + 1;
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	} else {
		localStorage.setItem("saveNumbers", 1);
		document.querySelector(".heart span").textContent = 1;
		document.querySelector(".circle-heart .fa-circle").style.visibility = "visible";
	}
	setItems(products);
}

function setItems(products) {
	let saveItems = localStorage.getItem("saved");
	saveItems = JSON.parse(saveItems);
	console.log(saveItems);

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
                <a src="/html/furious.html><img src="/images/GameHub_covers${item.covers}_desktop.png"></a>
            </div>
            `;
		});
	}
}

showSaved();
