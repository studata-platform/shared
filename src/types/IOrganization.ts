import { IImage } from "./IImage";
import { ILocation } from "./ILocation";
import { IActivities } from "./IActivity";

export type IOrganization = {
  _id: string;
  name: string;
  image?: IImage;
  location?: ILocation;
  activity: IActivities;
};