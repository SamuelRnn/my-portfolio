/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titles: "Titles",
        accent: "Accent",
      },
      colors: {
        accent: "rgb(171 64 96)",
        "main-dark": "rgb(17 17 17)",
      },
      width: {
        main: "min(1200px,100%)",
      },
      height: {
        "start-banner": "calc(100vh - 10rem)",
      },
    },
  },
  plugins: [],
};
