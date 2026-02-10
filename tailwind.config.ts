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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#f5f3f0',
          100: '#e8e4dd',
          200: '#d1c9bb',
          300: '#b9ad99',
          400: '#a29177',
          500: '#8b7655', // Main brand color - warm wood tone
          600: '#6f5e44',
          700: '#534633',
          800: '#372f22',
          900: '#1c1711',
        },
        accent: {
          DEFAULT: '#2c2c2c', // Charcoal - matches logo
          light: '#3d3d3d',
          dark: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};
export default config;
