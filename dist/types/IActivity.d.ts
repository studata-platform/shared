import { IUser } from "./IUser";
import Resource from "../data/Resource";
export declare type IActivity = {
    id: string;
    mutation: string;
    model: string;
    ref: string;
    data?: string;
    user: IUser;
    createdDate: string;
};
export declare type IActivityInput = {
    mutation: string;
    model: Resource;
    ref: string;
    data?: string;
};
/**
 * List of actions to keep track of the changes in a resources
 */
export declare type IActivities = IActivity[];
//# sourceMappingURL=IActivity.d.ts.map