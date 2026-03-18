/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        search: "#FFCCFD",
        btn: "#330031",
        homebg: "#121214", // A deeper, richer dark mode background
        primary: "#8B5CF6", // Violet accent
        secondary: "#1F2937", // Card backgrounds
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
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
