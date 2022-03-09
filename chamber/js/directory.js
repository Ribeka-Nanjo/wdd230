const requestURL =
	"https://Ribeka-Nanjo.github.io/wdd230/lesson9/data/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsin
		const companies = jsonObject["companies"];
		companies.forEach(displayCompanies);
	});

function displayCompanies(company) {
	// Create elements to add to the document
	let card = document.createElement("section");
	let add = document.createElement("p");
	let name = document.createElement("h3");
	let portrait = document.createElement("img");
	let tel = document.createElement("p");
	let url = document.createElement("a");

	// Change the textContent property of the element to contain company name
	name.textContent = `${company.name}`;
	add.textContent = `${company.add}`;
	tel.textContent = `${company.tel} `;
	url.textContent = `${company.url}`;

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
	portrait.setAttribute("src", company.imageurl);
	portrait.setAttribute("alt", `Logo of ${company.name}image`);
	portrait.setAttribute("loading", "lazy");
	url.setAttribute("href", `${company.url}`);

	// Add/append the section(card) with the h2 element
	card.appendChild(name);
	card.appendChild(portrait);
	card.appendChild(add);
	card.appendChild(tel);
	card.appendChild(url);

	// Add/append the existing HTML div with the cards class with the section(card)
	cards.appendChild(card);
}

//Card and list view
let cardView = function () {
	document.querySelector(".cards").classList.remove("listV");
	document.querySelector(".cards").classList.add("cardV");
};

let listView = function () {
	document.querySelector(".cards").classList.add("listV");
	document.querySelector(".cards").classList.remove("cardV");
};
