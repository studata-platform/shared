import { IActivities } from "./IActivity";
import { IOrganization } from "./IOrganization";
import { IProjectState } from "./IProjectState";
import { IRichText, IRichTextInput } from "./IRichText";
import { IUser } from "./IUser";

export type IProject = {
  id?: string;

  shortName: string;
  title: string;
  status: IProjectState;
  organizations: IOrganization[];
  team: IUser[];
  duration?: {
    startDate: string;
    endDate: string;
  };
  richText: IRichText[];

  activity: IActivities;
};

export type ICreateProjectInput = {
  shortName: string;
  title: string;
  status: IProjectState;
  organizations: IOrganization[];
  team: IUser[];
  duration?: {
    startDate?: string;
    endDate?: string;
  };
  richText?: IRichTextInput;
};

export type IUpdateProjectInput = {
  shortName?: string;
  title?: string;
  status?: string; // Reference to ProjectState
  duration?: {
    startDate?: string;
    endDate?: string;
  };
  richText?: IRichTextInput;
};
