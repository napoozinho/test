import gsap from 'gsap'

export default function (selector) {
  const component = document.querySelector(selector)

  gsap.from(component, {
    yPercent: -100,
  })
}
