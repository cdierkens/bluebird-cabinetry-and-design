import { isNil } from "lodash";

export const isDefined = <T extends unknown>(
  value: T | null | undefined
): value is T => {
  return !isNil(value);
};
