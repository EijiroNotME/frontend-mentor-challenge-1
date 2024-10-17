/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#0C1323",
          text: "#FFFFFF",
        },
        secondary: {
          default: "#1E204C",
        },
        accent: {
          default: "#5847EA",
        },
        orange: {
          default: "#FF8B66",
          dark: "#DC6948",
        },
        blue: {
          default: "#54C2E3",
          dark: "#3D9CBE",
        },
        red: {
          default: "#FE5E7D",
          dark: "#F04768",
        },
        green: {
          default: "#4CCF83",
          dark: "#2AB967",
        },
        purple: {
          default: "#7235D1",
          dark: "#5A1DB9",
        },
        yellow: {
          default: "#F2C85C",
          dark: "#E6A139",
        },
      },
    },
  },
  plugins: [],
};
