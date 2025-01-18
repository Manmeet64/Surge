/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // white: "#fffeee",
        white: "#333",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, #7B2CEF 0%, ##4f1cd9 50%, #1d1d26 100%)",
      },
    },
  },
  plugins: [],
};
