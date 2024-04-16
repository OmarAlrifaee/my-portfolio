/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-bg": "#1f1f38",
        "c-bg-variant": "#2c2c6c",
        "c-primary": "#4db5ff",
        "c-primary-variant": "#4db5ff66",
        "c-light": "#ffffff99",
        "nav-bg": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
