import RoutePath from "../../data/RoutePath";

declare global {
  type ILink = {
    href: RoutePath | string;
    children?: string;
    target?: "_self" | "_blank";
    title?: string;
  };
}

export {};
