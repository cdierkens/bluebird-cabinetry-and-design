import resolveConfig from "tailwindcss/resolveConfig";
import {
  TailwindConfig,
  TailwindValues,
  TailwindValuesAnimation,
  TailwindValuesColor,
  TailwindValuesDropShadow,
  TailwindValuesFontFamily,
  TailwindValuesFontSize,
  TailwindValuesOutline,
} from "tailwindcss/tailwind-config";
import tailwindConfig from "../../tailwind.config.js";

interface TailwindTheme {
  readonly columns: TailwindValues;
  readonly spacing: TailwindValues;
  readonly animation: TailwindValues;
  readonly aspectRatio: TailwindValues;
  readonly backdropBlur: TailwindValues;
  readonly backdropBrightness: TailwindValues;
  readonly backdropContrast: TailwindValues;
  readonly backdropGrayscale: TailwindValues;
  readonly backdropHueRotate: TailwindValues;
  readonly backdropInvert: TailwindValues;
  readonly backdropOpacity: TailwindValues;
  readonly backdropSaturate: TailwindValues;
  readonly backdropSepia: TailwindValues;
  readonly backgroundColor: TailwindValuesColor;
  readonly backgroundImage: TailwindValues;
  readonly backgroundOpacity: TailwindValues;
  readonly backgroundPosition: TailwindValues;
  readonly backgroundSize: TailwindValues;
  readonly blur: TailwindValues;
  readonly brightness: TailwindValues;
  readonly borderColor: TailwindValuesColor;
  readonly borderOpacity: TailwindValues;
  readonly borderRadius: TailwindValues;
  readonly borderWidth: TailwindValues;
  readonly boxShadow: TailwindValues;
  readonly caretColor: TailwindValuesColor;
  readonly accentColor: TailwindValuesColor;
  readonly contrast: TailwindValues;
  readonly container: TailwindValues;
  readonly content: TailwindValues;
  readonly cursor: TailwindValues;
  readonly divideColor: TailwindValuesColor;
  readonly divideOpacity: TailwindValues;
  readonly divideWidth: TailwindValues;
  readonly dropShadow: TailwindValuesDropShadow;
  readonly fill: TailwindValues;
  readonly grayscale: TailwindValues;
  readonly hueRotate: TailwindValues;
  readonly invert: TailwindValues;
  readonly flex: TailwindValues;
  readonly flexGrow: TailwindValues;
  readonly flexShrink: TailwindValues;
  readonly fontFamily: TailwindValuesFontFamily;
  readonly fontSize: TailwindValuesFontSize;
  readonly fontWeight: TailwindValues;
  readonly gap: TailwindValues;
  readonly gradientColorStops: TailwindValuesColor;
  readonly gridAutoColumns: TailwindValues;
  readonly gridAutoRows: TailwindValues;
  readonly gridColumn: TailwindValues;
  readonly gridColumnEnd: TailwindValues;
  readonly gridColumnStart: TailwindValues;
  readonly gridRow: TailwindValues;
  readonly gridRowStart: TailwindValues;
  readonly gridRowEnd: TailwindValues;
  readonly transformOrigin: TailwindValues;
  readonly gridTemplateColumns: TailwindValues;
  readonly gridTemplateRows: TailwindValues;
  readonly height: TailwindValues;
  readonly inset: TailwindValues;
  readonly keyframes: TailwindValuesAnimation;
  readonly letterSpacing: TailwindValues;
  readonly lineHeight: TailwindValues;
  readonly listStyleType: TailwindValues;
  readonly margin: TailwindValues;
  readonly maxHeight: TailwindValues;
  readonly maxWidth: TailwindValues;
  readonly minHeight: TailwindValues;
  readonly minWidth: TailwindValues;
  readonly objectPosition: TailwindValues;
  readonly opacity: TailwindValues;
  readonly order: TailwindValues;
  readonly outline: TailwindValuesOutline;
  readonly padding: TailwindValues;
  readonly placeholderColor: TailwindValuesColor;
  readonly placeholderOpacity: TailwindValues;
  readonly ringColor: TailwindValuesColor;
  readonly ringOffsetColor: TailwindValuesColor;
  readonly ringOffsetWidth: TailwindValues;
  readonly ringOpacity: TailwindValues;
  readonly ringWidth: TailwindValues;
  readonly rotate: TailwindValues;
  readonly saturate: TailwindValues;
  readonly scale: TailwindValues;
  readonly scrollMargin: TailwindValues;
  readonly scrollPadding: TailwindValues;
  readonly sepia: TailwindValues;
  readonly skew: TailwindValues;
  readonly space: TailwindValues;
  readonly stroke: TailwindValues;
  readonly strokeWidth: TailwindValues;
  readonly textColor: TailwindValuesColor;
  readonly textIndent: TailwindValues;
  readonly textOpacity: TailwindValues;
  readonly transitionDuration: TailwindValues;
  readonly transitionDelay: TailwindValues;
  readonly transitionProperty: TailwindValues;
  readonly transitionTimingFunction: TailwindValues;
  readonly translate: TailwindValues;
  readonly width: TailwindValues;
  readonly willChange: TailwindValues;
  readonly zIndex: TailwindValues;
}

type ThemeColors = typeof tailwindConfig.theme.colors;
type ThemeGradiants = typeof tailwindConfig.theme.gradients;
type ThemeScreens = typeof tailwindConfig.theme.screens;

interface Theme extends TailwindTheme {
  colors: ThemeColors;
  gradiants: ThemeGradiants;
  screens: ThemeScreens;
}

type Config = Omit<TailwindConfig, "theme"> & {
  theme: Theme;
};

export const { theme } = resolveConfig(
  tailwindConfig as any as TailwindConfig
) as Config;

export function tw(literals: TemplateStringsArray) {
  return literals.join(" ");
}
