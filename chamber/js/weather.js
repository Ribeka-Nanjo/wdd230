const apiURL =
	"http://api.openweathermap.org/data/2.5/weather?id=1850147&q=Tokyo&units=imperial&appid=74a52b658ebc6441b78bea6998377dfd";
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
			).innerHTML = `${windchill.toFixed(0)} &#8457`;
		} else {
			document.querySelector("#wind-chill").innerHTML = "N/A";
		}
		document.querySelector("#wind-speed").innerHTML = `${windspeed.toFixed(
			0
		)} MPH`;
		document.querySelector(
			"#current-temp"
		).innerHTML = `${currenttemp.toFixed(0)} &#8457`;

		const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
		const desc = jsObject.weather[0].description;

		document.querySelector("#weathericon").setAttribute("src", iconsrc);
		document.querySelector("#weathericon").setAttribute("alt", desc);
		document.querySelector("figcaption").textContent = desc;
	});
