import { IActivities } from "./IActivity";
import { IOrganization } from "./IOrganization";
export declare type IProvidedUser = {
    provider: string;
    id: string;
    displayName: string;
    name: {
        familyName: string;
        givenName: string;
        middleName: string;
    };
    emails: {
        value: string;
        type: string;
    }[];
    photos: {
        value: string;
    }[];
};
export declare type IUser = IProvidedUser & {
    organizations: IOrganization[];
    role: number;
    activities: IActivities;
};
//# sourceMappingURL=IUser.d.ts.map