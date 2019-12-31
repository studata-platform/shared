import RoutePath from "../data/RoutePath";

export type ILink = {
  href: RoutePath | string;
  children?: string;
  target?: "_self" | "_blank";
  title?: string;
};
