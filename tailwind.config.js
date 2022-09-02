/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      Pacifico: ["Pacifico", "cursive"],
    },
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/background1.png')",
        hero2: "url('../src/assets/background2.png')",
      },
    },
  },
  plugins: [
    // require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
    require("daisyui"),
    // add another require/ plugin if adding tw-elements
  ],
};
