import { IUser } from "./IUser";
export declare type IActivity = {
    event: string;
    resolver: string;
    property: string;
    author: IUser;
    createdDate: string;
};
/**
 * List of actions to keep track of the changes in a resources
 */
export declare type IActivities = IActivity[];
//# sourceMappingURL=IActivity.d.ts.map