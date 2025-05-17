
export default {
	content: [
	  './index.html', // Add this if missing
	  './src/**/*.{js,jsx,ts,tsx,html}', // Added TypeScript support
	  './pages/**/*.{js,jsx,ts,tsx}',
	  './components/**/*.{js,jsx,ts,tsx}',
	  './app/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
	  extend: {
		borderWidth: {
		  '3': '3px', // Ensures border-3 is available if needed
		}
	  },
	},
	plugins: [],
  }