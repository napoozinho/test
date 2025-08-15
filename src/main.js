// Define components with their selectors and import functions
const components = [
  {
    selector: "[data-component='navbar']",
    importFn: () => import('./components/navbar.js'),
  },
  {
    selector: "[data-component='slider']",
    importFn: () => import('./components/slider.js'),
  },
  // Add more components here
]

async function loadComponent({ selector, importFn }) {
  try {
    if (document.querySelector(selector)) {
      const module = await importFn()
      const componentName = importFn.name || 'unknown'

      if (typeof module.default === 'function') {
        module.default(selector)
        console.log(`✅ ${selector} loaded`)
      } else {
        console.warn(`No valid default function found in ${componentName}.js`)
      }
    }
  } catch (error) {
    console.error(`Failed to load ${importFn.name || 'component'}:`, error)
  }
}

;(async () => {
  await Promise.all(components.map(loadComponent))
})()
