function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var main$1 = {};

var hasRequiredMain;

function requireMain () {
	if (hasRequiredMain) return main$1;
	hasRequiredMain = 1;
	// Define components with their selectors and import functions
	const components = [
	  {
	    selector: "[data-component='navbar']",
	    importFn: () => import('./navbar-BN5coUSd.js'),
	  },
	  {
	    selector: "[data-component='slider']",
	    importFn: () => import('./slider-Dsuq7WU6.js'),
	  },
	  {
	    selector: "[data-component='slider-simpsons']",
	    importFn: () => import('./slider-simpsons-IlzpaTSi.js'),
	  },
	  // Add more components here
	];

	async function loadComponent({ selector, importFn }) {
	  try {
	    const component = document.querySelector(selector);
	    if (!component) return
	    const module = await importFn();
	    const componentName = importFn.name || 'unknown';

	    if (typeof module.default === 'function') {
	      module.default(selector);
	      console.log(`✅ ${selector} loaded`);
	    } else {
	      console.warn(`No valid default function found in ${componentName}.js`);
	    }
	  } catch (error) {
	    console.error(`Failed to load ${importFn.name || 'component'}:`, error);
	  }
	}
(async () => {
	  try {
	    const module = await import('./global-BvmTRmvX.js');
	    if (typeof module.default === 'function') {
	      module.default();
	      console.log(`✅ global function loaded`);
	    } else {
	      console.warn(`No valid default function found in global.js`);
	    }
	  } catch (error) {
	    console.error(`Failed to load global function:`, error);
	  }
	  await Promise.all(components.map(loadComponent));
	})();
	return main$1;
}

var mainExports = requireMain();
var main = /*@__PURE__*/getDefaultExportFromCjs(mainExports);

export { main as default };
//# sourceMappingURL=main.js.map
