/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        /* colors: #80e5ff , #ccffee , white/black (light theme website)*/
        primary: "#80e5ff",
        secondary: "#ccffee",
      },
    },
  },
  plugins: [],
};
