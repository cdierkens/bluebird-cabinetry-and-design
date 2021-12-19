import { PageProps } from "gatsby";

export type UNSAFE_ANY = any;

export type PagePropsWithErrors<T extends any> = PageProps<T> & {
  errors?: UNSAFE_ANY;
};
