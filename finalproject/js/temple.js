const requestURL =
	"https://ribeka-nanjo.github.io/wdd230/finalproject/temple.data/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsin
		const temples = jsonObject["temples"];
		temples.forEach(displayTemples);
	});

function displayTemples(temple) {
	let card = document.createElement("section");
	let name = document.createElement("h2");
	let dedication = document.createElement("h4");
	let rededication = document.createElement("h4");
	let templeimg = document.createElement("img");
	let services = document.createElement("p");
	let add = document.createElement("p");
	let tel = document.createElement("p");

	name.textContent = `${temple.name}`;
	dedication.textContent = `DEDICATION: ${temple.dedication} `;
	rededication.textContent = `REDEDICATION: ${temple.rededication} `;
	services.textContent = `SERVICES: ${temple.services} `;
	add.textContent = `ADDRESS: ${temple.add}`;
	tel.textContent = `Telephone: ${temple.tel}`;

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	templeimg.setAttribute("src", temple.imageurl);
	templeimg.setAttribute("alt", `Image of ${temple.name}`);
	templeimg.setAttribute("loading", "lazy");

	// Add/append the section(card) with the h2 element
	card.appendChild(templeimg);
	card.appendChild(name);
	card.appendChild(dedication);
	card.appendChild(rededication);
	card.appendChild(add);
	card.appendChild(tel);
	card.appendChild(services);

	// Add/append the existing HTML div with the cards class with the section(card)
	cards.appendChild(card);
}

// Card review
let cardView = function () {
	document.querySelector(".cards").classList.remove("listV");
	document.querySelector(".cards").classList.add("cardV");
};

let listView = function () {
	document.querySelector(".cards").classList.add("listV");
	document.querySelector(".cards").classList.remove("cardV");
};
