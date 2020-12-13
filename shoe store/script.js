const slides = document.querySelectorAll(".slide");
// const slides = document.getElementsByClassName("slide");
const carosel = document.getElementById("carosel");
const left = document.getElementById("left");
const right = document.getElementById("right");
const len_slides = slides.length;

let current_slide = 0;

right.addEventListener("click", () => {
	current_slide++;
	if (current_slide > len_slides - 1) {
		current_slide = 0;
	}
	updateCarosel();
});

left.addEventListener("click", () => {
	current_slide--;
	if (current_slide < 0) {
		current_slide = len_slides - 1;
	}
	updateCarosel();
});

function updateCarosel() {
	carosel.style.transform = `translateX(${
		-current_slide * slides[0].offsetWidth
	}px)`;
	change_bg_color(current_slide);
}

function change_bg_color(index) {
	const bgcolor = `#${slides[index].getAttribute("data-bg")}`;
	document.body.style.backgroundColor = bgcolor;
	// console.log(bgcolor);
}
