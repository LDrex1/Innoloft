/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "header-1": "#272e71",
        "header-2": "#222222",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
