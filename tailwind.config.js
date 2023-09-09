/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jos: ["Josefin Slab", "serif"],
        slab: ["Roboto Slab", "serif"],
      },
      colors: {
        "bermuda-gray": {
          50: "#f3f6f8",
          100: "#e1e9ec",
          200: "#c7d5da",
          300: "#a0b7c0",
          400: "#71919f",
          500: "#5b7c8b",
          600: "#4a6270",
          700: "#41525d",
          800: "#3a4750",
          900: "#343d45",
          950: "#1f272d",
        },

        light_body: "#5A5A5A",
        dark_body: "#5A5A5A",
        dark_bnt_txt: "#5A5A5A",
        light_bnt_txt: "#5A5A5A",
        // dark_bnt_txt: "#5A5A5A",
        // dark_bnt_txt: "#5A5A5A",
        // dark_bnt_txt: "#5A5A5A",
        // dark_body: "#5A5A5A",
      },
      animation: {
        text: "text 5s ease infinite", //Beta text animation
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
