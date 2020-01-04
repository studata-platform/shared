import { IActivities } from "./IActivity";
import { IRichText } from "./IRichText";
import { IOrganization } from "./IOrganization";
import { IUser } from "./IUser";

export type IProject = {
  id: string;
  shortName: string;
  title: string;
  organizations: IOrganization[];
  team: IUser[];
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
