import resolveConfig from "tailwindcss/resolveConfig";
import { TailwindConfig } from "tailwindcss/tailwind-config";
import tailwindConfig from "../../../tailwind.config.js";
import { todo } from "../../migration.types.js";

export const PAGE_SIZE = 9;

export const { theme } = resolveConfig(
  (tailwindConfig as todo) as TailwindConfig
);
