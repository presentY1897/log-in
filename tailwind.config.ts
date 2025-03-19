import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				tertiary: "var(--color-tertiary)",
			},
		},
	},
	safelist: [
		`!bg-background`,
	],
	plugins: [],
} satisfies Config;
