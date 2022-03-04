const requestURL =
	"https://Ribeka-Nanjo.github.io/wdd230/lesson9/data/example.json";
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
	let h2 = document.createElement("h2");
	let portrait = document.createElement("img");
	let birthdate = document.createElement("p");
	let birthplace = document.createElement("p");
	let order = ``;
	switch (company.order) {
		case 1:
			order = `${company.order}st`;
			break;
		case 2:
			order = `${company.order}nd`;
			break;
		case 3:
			order = `${company.order}rd`;
			break;
		default:
			order = `${company.order}th`;
	}

	// Change the textContent property of the h2 element to contain the prophet's full name
	h2.innerHTML = `${company.name}`;
	birthdate.textContent = `Date of Birth:${company.birthdate} `;
	birthplace.textContent = `Place of Birth:${company.birthplace}`;

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	portrait.setAttribute("src", company.imageurl);
	portrait.setAttribute("alt", `Logo of ${company.name} - ${order} image`);
	portrait.setAttribute("loading", "lazy");

	// Add/append the section(card) with the h2 element
	card.appendChild(h2);
	card.appendChild(portrait);
	card.appendChild(birthdate);
	card.appendChild(birthplace);

	// Add/append the existing HTML div with the cards class with the section(card)
	cards.appendChild(card);
}
