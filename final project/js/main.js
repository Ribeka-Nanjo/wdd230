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
