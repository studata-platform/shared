import { IOrganization } from "./IOrganization";
import { IRichText } from "./IRichText";
import { IActivity, IActivities } from "./IActivity";

export type IProject = {
  shortName: string;
  title: string;
  organizations: IOrganization[];
  team: string[];
  attachments?: {
    name: string;
    location: string;
  }[];
  duration?: {
    startDate: string;
    endDate: string;
  };
  body?: IRichText;
  activity: IActivities;
};
