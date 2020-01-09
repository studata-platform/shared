import { IImage } from "./IImage";
import { ILocation } from "./ILocation";
import { IActivities } from "./IActivity";
export declare type IOrganization = {
    id?: string;
    name: string;
    image?: IImage;
    location?: ILocation;
    activities: IActivities;
};
export declare type ICreateOrganizationInput = {
    name: string;
    image?: IImage;
    location?: ILocation;
};
export declare type IUpdateOrganizationInput = {
    name?: string;
    image?: IImage;
    location?: ILocation;
};
//# sourceMappingURL=IOrganization.d.ts.map