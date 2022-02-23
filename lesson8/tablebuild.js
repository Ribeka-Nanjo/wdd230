const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const d = new Date();
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate =
	"Compiled " + monthName + " " + d.getDate() + ", " + year + " by Ribeka";
document.getElementById("currentdate").textContent = fulldate;

const dayName = daynames[d.getDay()];
const hours = d.getHours();
const minutes = d.getMinutes();
const second = d.getSeconds();
const fulldate2 =
	dayName +
	", " +
	monthName +
	" " +
	d.getDate() +
	", " +
	year +
	" " +
	hours +
	":" +
	minutes +
	":" +
	second +
	" (JST)";
document.getElementById("currentdate2").textContent = fulldate2;

//year
var today = new Date();
document.querySelector("#year").textContent = today.getFullYear();
