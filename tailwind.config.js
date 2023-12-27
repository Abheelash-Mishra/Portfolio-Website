/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			"sm": "640px",
			"projectMobile": "550px",
			"md": "768px",
			"lg": "1024px",
			"xl": "1280px",
			"LaptopL": "1440px",
			"2K": "2048px",
		},
		extend: {
			colors: {
				cyberpunkYellow: "#FCEE0A",
				aqua: "#00FFFF",
			},
			scale: {
				'103': '1.03',
			}
		},
		fontFamily: {}
	},
	plugins: [],
}

