import { IActivities } from "./IActivity";
import { ILink } from "./ILink";
import { IRichText, IRichTextInput } from "./IRichText";

export type IEvent = {
  id?: string;

  slug: string;
  color: string;
  startDate: string;
  title: string;
  link?: ILink;
  richText: IRichText[];

  activities: IActivities;
};

export type ICreateEventInput = {
  slug: string;
  color: string;
  startDate: string;
  title: string;
  richText: IRichTextInput;
};

export type IUpdateEventInput = {
  slug?: string;
  color?: string;
  startDate?: string;
  title?: string;
  richText?: IRichTextInput;
};
