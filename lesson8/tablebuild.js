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
