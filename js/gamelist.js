const listGames = document.querySelector(".gameList");
const url = "https://gronnfrosk.one/gamehub/wp-json/wc/store/products?per_page=20";

async function renderGames() {
	const response = await fetch(url);
	const products = await response.json();

	products.forEach(function (product) {
		listGames.innerHTML += `
                  <a href="/html/details.html?id=${product.id}"><img src="${product.images[0].src}" class="product-img"></a>
		`;
	});
}
renderGames();
