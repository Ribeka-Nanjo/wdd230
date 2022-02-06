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

function Settoday() {
	if (day === "Saturday" || day === "Tuesday") {
		document.querySelector(".banner").style.visibility = "visible";
	} else {
		document.querySelector(".banner").style.display = "none";
	}
}
