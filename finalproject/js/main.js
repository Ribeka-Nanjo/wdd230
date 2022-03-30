//HEADER
//Humberger Menu
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//FOOTER
//last modified
document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

//weather
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=35.68&lon=139.75&exclude=alerts,daily&units=metric&appid=74a52b658ebc6441b78bea6998377dfd`;
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		const currenttemp = jsObject.current.temp;
		const currenthumid = jsObject.current.humidity;

		document.querySelector(
			"#current-temp"
		).innerHTML = `${currenttemp.toFixed(0)} &#8451;`;
		document.querySelector("#humidity").innerHTML = `${currenthumid.toFixed(
			0
		)} %`;

		const iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
		const desc = jsObject.current.weather[0].description;
		document.querySelector("#weathericon").setAttribute("src", iconsrc);
		document.querySelector("#weathericon").setAttribute("alt", desc);
		document.querySelector("#weatherdesc").textContent = desc;

		const alertEvent = jsObject.alerts.event;
		const alertDescription = jsObject.alerts.description;
		const named = document.getElementById("min-banner");

		const todaysdate = date.getDay();
		if (1) {
			let x = document.querySelector("#text");
			x.innerHTML = `${alertEvent}, ${alertDescription}`;
		}
	});

const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
	weekday: "short",
	month: "short",
	day: "numeric",
}).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Slide pictures
$(".slider").slick({
	autoplay: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '<div class="slick-prev"></div>',
	nextArrow: '<div class="slick-next"></div>',
	centerMode: true,
	variableWidth: true,
	dots: true,
});

//////
const requestURL =
	"https://byui-cit230.github.io/wdd230/finalproject/temple.data/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		console.table(jsonObject); // temporary checking for valid response and data parsin
		const temples = jsonObject["temples"];
		prophets.forEach(displayTemples);
	});

function displayProphets(temple) {
	let card = document.createElement("section");
	let h2 = document.createElement("h2");
	let dedication = document.createElement("h3");
	let rededication = document.createElement("h3");
	let templeimg = document.createElement("img");
	let services = document.createElement("p");
	let add = document.createElement("p");
	let tel = document.createElement("p");
	let order = ``;

	h2.innerHTML = `${temple.name}`;
	dedication.textContent = `DEDICATION:${temple.dedication} `;
	rededication.textContent = `REDEDICATION:${temple.rededication} `;
	services.textContent = `SERVICES:${temple.services} `;
	add.textContent = `ADDRESS:${temple.add}`;
	tel.textContent = `Telephone:${temple.tel}`;

	// Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
	templeimg.setAttribute("src", temple.imageurl);
	templeimg.setAttribute("alt", `Image of ${temple.name}`);
	templeimg.setAttribute("loading", "lazy");

	// Add/append the section(card) with the h2 element
	card.appendChild(templeimg);
	card.appendChild(h2);
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
