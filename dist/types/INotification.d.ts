import { IUser } from "./IUser";
import NotificationState from "../data/NotificationState";
export declare type INotification = {
    id?: string;
    user: IUser;
    message: string;
    status: NotificationState;
    createdDate: string;
};
//# sourceMappingURL=INotification.d.ts.map