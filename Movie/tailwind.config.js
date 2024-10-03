/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        search: "#FFCCFD",
        btn: "#330031",
        homebg: "#1A1A1D",
      },
      width: {
        128: "1000px",
        700: "700px",
        500: "500px",
        220: "220px",
      },
      height: {
        128: "1000px",
      },
    },
  },
  plugins: [],
};
