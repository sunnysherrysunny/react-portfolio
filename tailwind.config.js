/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.md",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      inset: {
        17: "68px",
        26: "104px",
      },
      colors: {
        "primary-light": "#FBF8F1",
        "secondary-light": "#F7ECDE",
        "ternary-light": "#E9DAC1",
        "primary-dark": "#2C3333",
        "secondary-dark": "#395B64",
        "ternary-dark": "#A5C9CA",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
