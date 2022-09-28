import { products } from "./products.js";

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
const button = document.querySelector(".cart1");

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
