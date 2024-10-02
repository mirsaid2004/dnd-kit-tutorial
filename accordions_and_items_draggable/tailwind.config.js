/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pop: {   
          "0%": {
          transform: scale(1),
          boxShadow:"",
        },
        "100%": {
          transform: "scale(var(--scale))",
          boxShadow: "",
        }
      },
      fadeIn: {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        }
      }
      }
    },
  },
  plugins: [],
}