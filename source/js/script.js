const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');


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
