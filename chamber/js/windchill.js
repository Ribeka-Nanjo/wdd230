let t = parseFloat(document.querySelector("#current-temp").textContent);
let s = parseFloat(document.querySelector("#wind-speed").textContent);
let windchill = "";

if (t <= 50 && s > 3) {
	windchill = windChill(t, s);
	windchill = `${windchill}°F`;
} else {
	windchill = "N/A";
}

document.querySelector("#windchill").innerHTML = windchill;

function windChill(temp, speed) {
	return Math.round(
		35.74 +
			0.6215 * temp -
			35.75 * Math.pow(speed, 0.16) +
			0.4275 * temp * Math.pow(speed, 0.16)
	);
}

const apiURL =
	"http://api.openweathermap.org/data/2.5/weather?id=1850147&q=Tokyo&units=imperial&appid=74a52b658ebc6441b78bea6998377dfd";
fetch(apiURL)
	.then((response) => response.json())
	.then((jsObject) => {
		document.querySelector("#wind-speed").textContent =
			jsObject.wind.speed.toFixed(1);
		document.querySelector("#current-temp").textContent =
			jsObject.main.temp.toFixed(0);

		const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
		const desc = jsObject.weather[0].description;

		document.querySelector("#weathericon").setAttribute("src", iconsrc);
		document.querySelector("#weathericon").setAttribute("alt", desc);
		document.querySelector("figcaption").textContent = desc;
	});
