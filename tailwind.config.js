/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        "grey-700": "hsl(0, 0%, 20%)",
        "grey-800": "hsl(0, 0%, 12%)",
        "grey-900": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
