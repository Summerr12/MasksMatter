$(document).ready(() => {
  for(let slideshow of document.getElementsByClassName("slideshow-container"))
  {
    slideshow.currentSlideIndex = 0;
    showSlides(slideshow);
  }
});

function plusSlides(n, arrownav) {
  let slideshow = arrownav.parentElement;
  slideshow.currentSlideIndex += n;
  showSlides(slideshow);
}

function currentSlide(n, dot) {
  let slideshow = dot.parentNode.previousElementSibling;
  slideshow.currentSlideIndex = n - 1;
  showSlides(slideshow);
}

function showSlides(slideshow) {
  let slides = slideshow.getElementsByClassName("mySlides");
  let dots = slideshow.nextElementSibling.getElementsByClassName("dot");

  slideshow.currentSlideIndex %= slides.length;
  if (slideshow.currentSlideIndex < 0) {
    slideshow.currentSlideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideshow.currentSlideIndex].style.display = "block";
  if(dots && dots.length > 0) dots[slideshow.currentSlideIndex].classList.add("active");
}