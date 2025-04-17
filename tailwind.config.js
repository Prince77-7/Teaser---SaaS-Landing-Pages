/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add a new gold palette
        gold: {
          DEFAULT: '#D4AF37', // Main luxury gold
          '50': '#fffbeb',
          '100': '#fef3c7',
          '200': '#fde68a',
          '300': '#fcd34d',
          '400': '#fbbf24',
          '500': '#D4AF37', // Main luxury gold
          '600': '#b18717', // Darker shades
          '700': '#916e10',
          '800': '#785a0f',
          '900': '#664912',
          '950': '#3f2a0a',
        },
        // Removed the purple and violet overrides from previous attempt
      },
    },
  },
  plugins: [],
}
