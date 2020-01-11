import { IImage } from "./IImage";
import { ILocation } from "./ILocation";
import { IActivities } from "./IActivity";

export type IOrganization = {
  id?: string;
  name: string;
  image?: IImage;
  locations: ILocation[];
  activities: IActivities;
};

export type ICreateOrganizationInput = {
  name: string;
  image: IImage;
  locations?: ILocation[];
};

export type IUpdateOrganizationInput = {
  name?: string;
  image?: IImage;
  locations?: ILocation[];
};
