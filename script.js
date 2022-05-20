/* TYPING ANIMATION */

var typed = new Typed(".typing",{
	strings : ["ideas","proyectos"],
	typeSpeed : 100,
	backSpeed : 100,
	loop : false
})


/* WORKS ITEMS HOVER ANIMATION*/

const workList = document.querySelectorAll(".works-item");


for(let i = 0; i<workList.length;i++){
	workList[i].onmouseover = ()=>{
		let workText = workList[i].firstChild;
		workText.style.display = "block";		
	}
	workList[i].onmouseout = ()=>{
		let workText = workList[i].firstChild;
		workText.style.display = "none";		
	}
}

/* GSAP SERVICIES-COLAB-SECTION */

const ancho = window.screen.width ;

gsap.utils.toArray(".intro").forEach(section => {
	let tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: "center center",
        // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
				end: () => "+=" + section.offsetWidth,
				scrub: true,
				pin: true,
        anticipatePin: 1
			},
			defaults: {ease: "none"}
		});
	// animate the container one way...
	tl.fromTo(section.querySelector(".colabs"), { xPercent: 100, x: 0}, {xPercent: 0})
	  // ...and the image the opposite way (at the same time)
	  .fromTo(section.querySelector(".colabs-container"), {xPercent: -100, x: 0}, {xPercent: 0}, 0);
});
