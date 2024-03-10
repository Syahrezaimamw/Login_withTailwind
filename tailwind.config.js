/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'birubg':"rgb(19,48,99)",
        'biru':"rgb(0,78,214)",
        'ungu':'#7a51d3'
        // Configure your color palette here
      }
    },
  },
  plugins: [],
}

