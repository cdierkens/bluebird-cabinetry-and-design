const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

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
    },
    gradients: (theme) => ({
      "blue-turquoise": [theme("colors.blue.dark"), theme("colors.turquoise")],
    }),
    extend: {
      fontFamily: {
        body: ["Open Sans", ...defaultTheme.fontFamily.sans],
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        85: ".85",
      },
      scale: {
        60: ".65",
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
  variants: {
    gradients: ["responsive", "hover"],
  },
  plugins: [require("./tailwind/plugins/gradients")],
};
