var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
     autoplay: {
      delay: 4500,
       disableOnInteraction: false,
     },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
  });
var tl = gsap.timeline();
tl.to(".content",{
  y:-100,
  opacity:0,
  delay:4,
  ease:"power2",
})
.to(".cont2 ",{
  y:-100,
  opacity:0,
  delay:4,
  ease:"power2",
})

.to(".cont3 ",{
	y:-100,
	opacity:0,
	delay:4,
	ease:"power2",
  });

  const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


	

