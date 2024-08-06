/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hidden': {
            'scrollbar-width': 'none', /* Firefox */
            '-ms-overflow-style': 'none', /* IE and Edge */
            'scrollbar-height': 'none', /* Safari */
          },
          '.scrollbar-hidden::-webkit-scrollbar': {
            'display': 'none', /* Safari and Chrome */
          },
        },
        ['responsive', 'hover', 'focus']
      );
    },
  ],
}