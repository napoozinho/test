import Swiper from 'swiper'
import 'swiper/css'

export default function (selector) {
  const component = document.querySelector(selector)

  const swiper = new Swiper(component.querySelector('.swiper'), {
    slidesPerView: 'auto',
  })
}
