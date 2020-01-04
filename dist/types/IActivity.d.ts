import { IUser } from "./IUser";
export declare type IActivity = {
    id: string;
    resolver: string;
    message: string;
    user: IUser;
    createdDate: string;
};
/**
 * List of actions to keep track of the changes in a resources
 */
export declare type IActivities = IActivity[];
//# sourceMappingURL=IActivity.d.ts.map