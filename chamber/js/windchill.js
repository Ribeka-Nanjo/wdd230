let t = parseFloat(document.querySelector("#t").textContent);
let s = parseFloat(document.querySelector("#s").textContent);
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
