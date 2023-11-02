/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        karla: ["Karla"],
      },
      colors: {
        navStart: "#711F8D",
        navEnd: "#A818DA",
      },
    },
  },
  plugins: [],
};
