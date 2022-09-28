import { products } from "./products.js";

let gamesToRender = products;

function renderGames() {
	const listGames = document.querySelector(".gamelist");
	listGames.innerHTML = "";

	gamesToRender.forEach(function (game) {
		listGames.innerHTML += `
	    <div class="">
                  <a href="/html/details.html?id=${game.id}"><img src="${game.image}" class="product-img"></a>
             </div>
	    `;
	});
}
renderGames();
