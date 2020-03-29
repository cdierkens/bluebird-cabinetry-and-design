const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.tsx"],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = () => ({
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 3,
      features: {
        "color-mod-function": { unresolved: "warn" },
        "nesting-rules": true,
        "custom-media-queries": {
          preserve: false,
        },
        "custom-properties": {
          preserve: false,
        },
      },
    }),
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
});
