const requestURL =
	"https://Ribeka-Nanjo.github./wdd230/lesson9/data/example.json";

const cards = document.querySelector(".cards");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsin
		const businesses = jsonObject["businesses"];
		businesses.forEach(displayBusinesses);
	});

function displayBusinesses(business) {
	// Create elements to add to the document
	let card = document.createElement("section");
	let address = document.createElement("address");
	let portrait = document.createElement("img");
	let tel = document.createElement("p");
	let ulr = document.createElement("p");
	let order = ``;
	switch (prophet.order) {
		case 1:
			order = `${prophet.order}st`;
			break;
		case 2:
			order = `${prophet.order}nd`;
			break;
		case 3:
			order = `${prophet.order}rd`;
			break;
		default:
			order = `${prophet.order}th`;
	}

	// Change the textContent property of the h2 element to contain the prophet's full name
	address.textContent = `${business.address}`;
	tel.textContent = `${business.tel} `;
	ulr.textContent = `${business.ulr}`;

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	portrait.setAttribute("src", prophet.imageurl);
	portrait.setAttribute("alt", `${business.name}`);
	portrait.setAttribute("loading", "lazy");

	// Add/append the section(card) with the h2 element
	card.appendChild(address);
	card.appendChild(portrait);
	card.appendChild(tel);
	card.appendChild(ulr);

	// Add/append the existing HTML div with the cards class with the section(card)
	cards.appendChild(card);
}
