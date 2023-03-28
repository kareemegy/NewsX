/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1a202c",
          secondary: "#2d3748",
          tertiary: "#4a5568",
          accent: "#9f7aea",
          text: "#f7fafc",
        },
        light: {
          primary: "#edf2f7",
          secondary: "#e2e8f0",
          tertiary: "#cbd5e0",
          accent: "#9f7aea",
          text: "#1a202c",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
