/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      translate: {
        '-50%': '-1/2',
      },
      margin: {
        '-120px': '-120px',
        '8px': '8px',
        '-144px': '-144px',
        '-64px': '-64px',
      },
      maxwidth: {
        '24px': '24px',
      },
      backgroundColor: {
        '#F0FBFF': '#F0FBFF',
        '#FFFAFA': '#FFFAFA',
        '#aae7f9': '#aae7f9',
        '#1974BC': '#1974BC',
      },
      borderWidth: {
        '1.5px': '1.5px',
      },
      outlineColor: {
        '#3c8cc4': '#3c8cc4',
      },
      textColor: {
        '#1974BC': '#1974BC',
      },
      fontFamily: {
        'Prompt': ['Prompt'],
      }
    },
  },
  plugins: [],
}

