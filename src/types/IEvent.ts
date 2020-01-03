import { ILink } from "./ILink";
import { IRichText } from "./IRichText";
import { IActivities } from "./IActivity";

export type IEvent = {
  slug: string;
  color: string;
  startDate: string;
  title: string;
  link?: ILink;
  richText: IRichText[];
  activity: IActivities;
};