/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: { "100": "#232323", "200": "rgba(0, 0, 0, 0.5)" },
        blue: "#9747ff",
        black: "#000",
        white1: "#fff",
        "dark-grey-8001": "#1b1b1b",
        "main-color-011": "#7c54f2",
        "dark-grey-5001": "#9c9c9c",
      },
      fontFamily: { "title-h2": "Poppins" },
      borderRadius: { small: "5px", base: "10px" },
    },
    fontSize: { base: "14px", lg: "16px", xl: "32px" },
  },
  corePlugins: { preflight: false },
};
