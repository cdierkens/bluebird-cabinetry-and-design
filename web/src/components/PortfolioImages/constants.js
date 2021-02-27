import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";

export const PAGE_SIZE = 9;

export const { theme } = resolveConfig(tailwindConfig);
