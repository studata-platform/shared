import PublicRoute from "../data/PublicRoute";

export type ILink = {
  id?: string;
  href: PublicRoute | string;
  children?: string;
  target?: "_self" | "_blank";
  title?: string;
};
