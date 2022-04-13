declare module "*.svg" {
  const component: React.FC<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>>;

  export default component;
}
