import { S as Swiper } from './swiper-core-BXj7971l.js';

function slider (selector) {
  const component = document.querySelector(selector);

  new Swiper(component.querySelector('.swiper'), {
    slidesPerView: 'auto',
  });
}

export { slider as default };
//# sourceMappingURL=slider-Dsuq7WU6.js.map
