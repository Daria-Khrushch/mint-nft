//preloader
window.addEventListener('load', () => {
	const preloader = document.querySelector('#preloader');
	preloader.classList.add('hide');
});


//nav
function smoothScroll(target, duration) {
	target = document.querySelector(target);
	const targetPosition = target.getBoundingClientRect().top;
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
	let startTime = null;
	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		const timeElapsed = currentTime - startTime;
		const run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}
	requestAnimationFrame(animation);
}
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		let href = this.getAttribute("href");
		const target = href === "#" || href === "" ? "html" : href;
		const duration = 1000;
		smoothScroll(target, duration);
		if (window.matchMedia("(min-width: 1050px)").matches) {
			return null
		} else {
			return hideMenu()
		}
	});
});


//menu
const menu = document.getElementById('menu_btn');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => hideMenu())
const hideMenu = () => {
	if (nav.classList.contains('toggled')) {
		nav.classList.remove('toggled');
		menu.classList.remove('active');
		document.body.style.overflow = 'auto';
	} else {
		nav.classList.add('toggled');
		menu.classList.add('active');
		document.body.style.overflow = 'hidden';
	}
}


//to top
document.getElementById("arrow_up").addEventListener("click", function() {
	document.body.style.overflow = 'hidden';
	const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if (currentScroll > 0) {
		window.requestAnimationFrame(scrollUp);
	}
});
function scrollUp() {
	const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
	if (currentScroll > 0) {
		window.requestAnimationFrame(scrollUp);
		window.scrollTo(0, currentScroll - (currentScroll / 20));
	}
	setTimeout(() => {
		document.body.style.overflow = 'auto';
	}, 2000);
}