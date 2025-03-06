/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure this matches your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5252", // This applies to text, backgrounds, borders, etc.
      },
      backgroundColor:{
        primary:'#ff5252'
      }
    },
  },
  plugins: [],
};
