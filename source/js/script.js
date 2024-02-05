const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');
const mainNav = document.querySelector('.main-nav');
const mainNavToggle = document.querySelector('.main-nav__toggle');

mainNav.classList.add('main-nav--closed');

if (sliderControl) {
  let flag = false;
  sliderControl.addEventListener('click', () => {
    if (flag) {
      slider.classList.toggle('slider--after');
      slider.classList.toggle('slider--before');
    } else {
      slider.classList.toggle('slider--after');
      flag = true;
    }
  });
}

mainNavToggle.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
})
