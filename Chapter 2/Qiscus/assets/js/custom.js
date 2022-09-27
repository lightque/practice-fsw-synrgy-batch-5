var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
	if (window.pageYOffset >= 100) {
		nav.classList.add("scroll");
		nav.classList.add("navbar-light", "bg-white", "navbar-shadow");
	} else {
		nav.classList.remove("scroll");
		nav.classList.remove("navbar-shadow");
	}
});
