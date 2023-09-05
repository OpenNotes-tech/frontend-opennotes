/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
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
