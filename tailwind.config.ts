import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgb(var(--background-dark) / <alpha-value>)",
        linen: "hsl(var(--background-linen) / <alpha-value>)",
        "light-gray": "hsl(var(--background-light-gray) / <alpha-value>)",
        "dark-blue": "hsl(var(--color-dark-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
