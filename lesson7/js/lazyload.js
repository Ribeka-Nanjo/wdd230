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
	rootMargin: "0px 0px -20px 0px",
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
