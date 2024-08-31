/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient:
          "linear-gradient(90deg,#ffb833,#fee0a9 20%,#f2eadb 40%,#e8fcff 60%,#a5f2fc 80%,#6feeff)",
      },
      spacing: {
        container: "1170px",
      },
    },
  },
  plugins: [],
};
