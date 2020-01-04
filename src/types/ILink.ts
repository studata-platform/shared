import RoutePath from "../data/RoutePath";

export type ILink = {
  id?: string;
  href: RoutePath | string;
  children?: string;
  target?: "_self" | "_blank";
  title?: string;
};
