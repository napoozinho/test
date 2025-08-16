import { S as Swiper } from './swiper-core--xlcUKY1.js';

function slider (selector) {
  const component = document.querySelector(selector);

  new Swiper(component.querySelector('.swiper'), {
    slidesPerView: 'auto',
  });
}

export { slider as default };
//# sourceMappingURL=slider-DzorZFAr.js.map
