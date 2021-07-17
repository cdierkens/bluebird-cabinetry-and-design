import resolveConfig from "tailwindcss/resolveConfig";
import { TailwindConfig } from "tailwindcss/tailwind-config";
import tailwindConfig from "../../tailwind.config.js";

type Config = Omit<TailwindConfig, "theme"> & {
  theme: Required<TailwindConfig["theme"]>;
};

export const { theme } = resolveConfig(
  tailwindConfig as any as TailwindConfig
) as Config;

export function tw(literals: TemplateStringsArray) {
  return literals.join(" ");
}
