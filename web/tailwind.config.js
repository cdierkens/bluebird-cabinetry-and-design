const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      black: "#000000",
      blue: {
        dark: "#0f4c81",
        light: "#d3dee8",
      },
      gold: "#b39a74",
      gray: {
        dark: "#70869e",
        light: "#efefef",
      },
      sand: "#fff0da",
      turquoise: "#27cdc0",
      white: "#ffffff",
      transparent: {
        white: "rgba(255,255,255, 0.85)",
      },
    },
    extend: {
      fontFamily: {
        body: ["Open Sans", ...defaultTheme.fontFamily.sans],
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        85: ".85",
      },
      spacing: {
        9: "2.25rem",
      },
    },
    screens: {
      sm: "458px",
      md: "932px",
      lg: "1248px",
      xl: "1880px",
    },
  },
  plugins: [],
  variants: {
    transformOrigin: ["responsive", "hover", "focus"],
  },
};
