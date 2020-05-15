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
        darker: "#3d3d3d",
        darkest: "#222222",
        light: "#f8f8f8",
      },
      sand: "#fff0da",
      turquoise: "#27cdc0",
      white: "#ffffff",
    },
    gradients: (theme) => ({
      "blue-turquoise": [theme("colors.blue.dark"), theme("colors.turquoise")],
      "blue-gray": [theme("colors.blue.dark"), theme("colors.gray.dark")],
    }),
    extend: {
      fontFamily: {
        body: ["Open Sans", ...defaultTheme.fontFamily.sans],
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      fill: {
        none: "none",
      },
      minWidth: {
        "1/2": "50%",
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
      stroke: {
        none: "none",
      },
      strokeWidth: {
        "3": "3",
        "4": "4",
        "5": "5",
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
  purge: {
    content: ["./src/**/*.js"],
    options: {
      whitelist: [
        "col-span-1",
        "col-span-2",
        "col-span-3",
        "row-span-1",
        "row-span-2",
        "row-span-3",
        "sm:col-span-1",
        "sm:col-span-2",
        "sm:col-span-3",
        "sm:row-span-1",
        "sm:row-span-2",
        "sm:row-span-3",
        "md:col-span-1",
        "md:col-span-2",
        "md:col-span-3",
        "md:row-span-1",
        "md:row-span-2",
        "md:row-span-3",
        "lg:col-span-1",
        "lg:col-span-2",
        "lg:col-span-3",
        "lg:row-span-1",
        "lg:row-span-2",
        "lg:row-span-3",
      ],
    },
  },
};
