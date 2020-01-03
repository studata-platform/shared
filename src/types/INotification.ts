import { IUser } from "./IUser";

export type INotification = {
  user: IUser;
  message: string;
  createdDate: string;
};
