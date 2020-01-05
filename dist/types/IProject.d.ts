import { IActivities } from "./IActivity";
import { IOrganization } from "./IOrganization";
import { IProjectState } from "./IProjectState";
import { IRichText, IRichTextInput } from "./IRichText";
import { IUser } from "./IUser";
export declare type IProject = {
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
export declare type ICreateProjectInput = {
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
export declare type IUpdateProjectInput = {
    shortName?: string;
    title?: string;
    status?: string;
    duration?: {
        startDate?: Date;
        endDate?: Date;
    };
    richText?: IRichTextInput;
};
//# sourceMappingURL=IProject.d.ts.map