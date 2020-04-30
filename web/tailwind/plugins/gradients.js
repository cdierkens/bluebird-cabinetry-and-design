const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities, e, theme, variants }) {
  const gradients = theme("gradients", {});
  const gradientVariants = variants("gradients", []);

  const utilities = Object.entries(gradients).map(([name, [start, end]]) => ({
    [`.bg-gradient-${e(name)}`]: {
      backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
    },
  }));

  addUtilities(utilities, gradientVariants);
});
