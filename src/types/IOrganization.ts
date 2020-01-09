import { IImage } from "./IImage";
import { ILocation } from "./ILocation";
import { IActivities } from "./IActivity";

export type IOrganization = {
  id?: string;
  name: string;
  image?: IImage;
  location?: ILocation;
  activities: IActivities;
};

export type ICreateOrganizationInput = {
  name: string;
  image?: IImage;
  location?: ILocation;
};

export type IUpdateOrganizationInput = {
  name?: string;
  image?: IImage;
  location?: ILocation;
};
