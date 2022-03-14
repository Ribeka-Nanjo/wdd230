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
