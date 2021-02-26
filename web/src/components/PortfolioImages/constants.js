import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";

export const PAGE_SIZE = 9;
export const ROOM_NAMES = ["Kitchen", "Bath", "Laundry", "Office"];
export const LABEL_NAMES = ["Banquette", "Bar", "Island", "3D Renderings"];

export const { theme } = resolveConfig(tailwindConfig);
