/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cursive": ["Shantell Sans"]
      },
      boxShadow: {
        "hard": "5px 5px 0px 0px #000000",
        "hard_inset": "inset 5px 5px 0px 0px #000000",
        "medium_hard": "3px 3px 0px 0px #000000",
        "medium_hard_inset": "inset 3px 3px 0px 0px #000000",
      }
    }
  },
  plugins: [],
}