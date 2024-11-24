import type { Config } from "tailwindcss";

export default {
	darkMode: "selector",
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
