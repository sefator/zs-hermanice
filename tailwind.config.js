/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: "#fdf6f0",
          100: "#fdeee3",
          300: "#f7cdb0",
          500: "#c26a32",
          800: "#5c3020",
        },
        brand: {
          50: '#f0f6fa',
          100: '#e1edf4',
          200: '#c8deeb',
          300: '#a1c5de',
          400: '#73a5cc',
          500: '#5286b6',
          600: '#3f6b9c',
          700: '#34557f',
          800: '#2d476a',
          900: '#0f2942', // Deep navy
          950: '#0a1a2a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffecd5',
          200: '#fed8a9',
          300: '#fdbe74',
          400: '#fb9b3c',
          500: '#f97e16',
          600: '#d04900', // Adjusted for contrast (darker orange)
          700: '#b23900',
          800: '#9a3c12',
          900: '#7c3312',
          950: '#431707',
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0,0,0,0.05)',
        'glow': '0 0 20px rgba(234, 100, 12, 0.3)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
