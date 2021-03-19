import { PageProps } from "gatsby";

export type todo = any;

export type PagePropsWithErrors = PageProps<todo> & { errors?: todo };
