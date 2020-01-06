import { IUser } from "./IUser";
import Event from "../data/Event";
export declare type IActivity = {
    id: string;
    event: Event;
    resourceType: string;
    resource: string;
    data?: string;
    user: IUser;
    createdDate: string;
};
export declare type IActivityInput = {
    event: Event;
    data?: string;
};
/**
 * List of actions to keep track of the changes in a resources
 */
export declare type IActivities = IActivity[];
//# sourceMappingURL=IActivity.d.ts.map