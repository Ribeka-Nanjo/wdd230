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
