const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=1850147&q=Tokyo&units=metric&appid=74a52b658ebc6441b78bea6998377dfd`;
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		const windspeed = jsObject.wind.speed;
		const currenttemp = jsObject.main.temp;

		if (windspeed > 3 && currenttemp <= 50) {
			const windchill =
				35.74 +
				0.6215 * currenttemp -
				35.75 * Math.pow(windspeed, 0.16) +
				0.4275 * currenttemp * Math.pow(windspeed, 0.16);

			document.querySelector(
				"#wind-chill"
			).innerHTML = `${windchill.toFixed(0)} &#8451;`;
		} else {
			document.querySelector("#wind-chill").innerHTML = "N/A";
		}
		document.querySelector("#wind-speed").innerHTML = `${windspeed.toFixed(
			1
		)}m/s`;
		document.querySelector(
			"#current-temp"
		).innerHTML = `${currenttemp.toFixed(0)} &#8451;`;

		const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
		const desc = jsObject.weather[0].description;

		document.querySelector("#weathericon").setAttribute("src", iconsrc);
		document.querySelector("#weathericon").setAttribute("alt", desc);
		document.querySelector("figcaption").textContent = desc;
	});

//Footer
document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

//Header
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Humberger Menu
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Banner text display
const named = document.getElementById("min-banner");
const date = new Date();
const todaysdate = date.getDay();
if (todaysdate == 1 || todaysdate == 2) {
	let x = document.querySelector("#text");
	x.innerHTML = `🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`;
}
