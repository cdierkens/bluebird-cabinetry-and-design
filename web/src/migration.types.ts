import { PageProps } from "gatsby";

export type UNSAFE_ANY = any;

export type PagePropsWithErrors = PageProps<UNSAFE_ANY> & {
  errors?: UNSAFE_ANY;
};
