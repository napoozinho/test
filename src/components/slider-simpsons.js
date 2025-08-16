import Swiper from 'swiper'
import 'swiper/css'

export default async function (selector) {
  const component = document.querySelector(selector)
  if (!component) throw new Error('Container not found')

  let data
  try {
    data = await fetchCharacters('https://thesimpsonsapi.com/api/characters')
  } catch (error) {
    console.error('Failed to fetch characters:', error)
    return
  }

  const slideTemplate = component.querySelector('.swiper-slide')
  if (!slideTemplate) throw new Error('Slide template not found')

  data.results.forEach((character) => {
    const slide = slideTemplate.cloneNode(true)
    const image = slide.querySelector('img')
    image.src = `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`
    const text = slide.querySelector('h3')
    text.textContent = character.name
    slideTemplate.parentElement.append(slide)
  })

  slideTemplate.remove()

  new Swiper(component.querySelector('.swiper'), {
    slidesPerView: 'auto',
  })

  async function fetchCharacters(url) {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Error fetching: ${response.status}`)
    return response.json()
  }
}
