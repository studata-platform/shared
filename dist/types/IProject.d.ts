import { IActivities } from "./IActivity";
import { IRichText } from "./IRichText";
import { IOrganization } from "./IOrganization";
export declare type IProject = {
    shortName: string;
    title: string;
    organizations: IOrganization[];
    team: string[];
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
//# sourceMappingURL=IProject.d.ts.map