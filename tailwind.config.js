/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        16: "200px, minmax(0, 1fr), 150px",
        footer: "200px minmax(900px, 1fr) 100px",
        base: "18rem auto 20rem",
      },
    },
  },
  plugins: [],
};
