import { ILink } from "./ILink";
import { IActivities } from "./IActivity";
import { IRichText } from "./IRichText";

export type IEvent = {
  slug: string;
  color: string;
  startDate: string;
  title: string;
  link?: ILink;
  richText: IRichText[];
  activity: IActivities;
};
