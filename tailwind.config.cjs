/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        slng: {
          500: '#7c3aed',
          600: '#6d28d9',
        },
        sand: {
          50: '#f4efe7',
          100: '#efe7db',
          200: '#e7dccd',
        },
      },
      fontFamily: {
        display: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif'],
      },
      boxShadow: {
        phone: '0 12px 30px rgba(17, 24, 39, 0.15)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};