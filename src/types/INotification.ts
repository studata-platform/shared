import { IUser } from "./IUser";
import NotificationState from "../data/NotificationState";

export type INotification = {
  user: IUser;
  message: string;
  status: NotificationState;
  createdDate: string;
};
