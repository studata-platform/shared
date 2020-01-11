import { IImage } from "./IImage";
import { ILocation } from "./ILocation";
import { IActivities } from "./IActivity";
export declare type IOrganization = {
    id?: string;
    name: string;
    image: IImage;
    locations: ILocation[];
    activities: IActivities;
};
export declare type ICreateOrganizationInput = {
    name: string;
    image: IImage;
    locations?: ILocation[];
};
export declare type IUpdateOrganizationInput = {
    name?: string;
    image?: IImage;
    locations?: ILocation[];
};
//# sourceMappingURL=IOrganization.d.ts.map