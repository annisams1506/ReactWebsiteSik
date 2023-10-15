/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'bgupi' : "url('/src/page/bgupi.jpg')",
        'diving' : "url('/src/IMG/diving.jpg')",
        'coral' :"url ('src/components/Untitled.png')",
        'auah' : "url ('src/IMG/images.jpg')",
        'hadeh' : "url('/src/IMG/diving.jpg')"
      },
    },
  },
  plugins: [],
}

