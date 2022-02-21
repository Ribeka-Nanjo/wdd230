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
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const hours = d.getHours();
const minutes = d.getMinutes();
const second = d.getSeconds();
const fulldate =
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
document.getElementById("currentdate").textContent = fulldate;

//year
var today = new Date();
document.querySelector("#year").textContent = today.getFullYear();
