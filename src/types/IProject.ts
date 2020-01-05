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
    startDate: Date;
    endDate: Date;
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
    startDate?: Date;
    endDate?: Date;
  };
  richText?: IRichTextInput;
};

export type IUpdateProjectInput = {
  shortName?: string;
  title?: string;
  status?: string; // Reference to ProjectState
  duration?: {
    startDate?: Date;
    endDate?: Date;
  };
  richText?: IRichTextInput;
};
