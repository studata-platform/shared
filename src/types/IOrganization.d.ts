import { IImage } from "./IImage";
import { ILocation } from "./ILocation";

export type IOrganization = {
  _id: string;
  name: string;
  image?: IImage;
  location?: ILocation;
};
