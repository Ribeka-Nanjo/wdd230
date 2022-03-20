const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
	const src = img.getAttribute("data-src");
	if (!src) {
		return;
	}
	img.src = src;
}
const imageOptions = {
	threshold: 1,
	rootMargin: "0px 0px 100px 0px",
};

const imageObserver = new IntersectionObserver((items, imageObserver) => {
	items.forEach((item) => {
		if (!item.isIntersecting) {
			return;
		} else {
			preloadImage(item.target);
			imageObserver.unobserve(item.target);
		}
	});
}, imageOptions);

images.forEach((image) => {
	imageObserver.observe(image);
});

//Footer
document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// VISIT NUMBER //

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

// show todays date.
todayDisplay.textContent = Date.now();

// Header //
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Humberger Menu //
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
