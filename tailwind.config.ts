import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette moderne vert sauge et terre
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d1c8',
          300: '#a3b4a4',
          400: '#7d957f',
          500: '#5f7961',
          600: '#4a604c',
          700: '#3d4e3e',
          800: '#334135',
          900: '#2b362d',
          950: '#161d17',
        },
        terra: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        sand: {
          50: '#fdfcfb',
          100: '#f8f6f3',
          200: '#f1ede7',
          300: '#e8e2d9',
          400: '#d9d0c3',
          500: '#c5b8a8',
          600: '#a89885',
          700: '#8b7e6d',
          800: '#73685b',
          900: '#5f564d',
        },
        forest: {
          50: '#f4f6f4',
          100: '#e5ebe6',
          200: '#cbd7cd',
          300: '#a8bbaa',
          400: '#7d9880',
          500: '#5c7a5f',
          600: '#47614a',
          700: '#3a4e3c',
          800: '#314032',
          900: '#29352a',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};

export default config;
