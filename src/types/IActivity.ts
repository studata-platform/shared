import { IUser } from "./IUser";

export type IActivity = {
  id: string;

  // Name of the mutation resolver that handled the action
  resolver: string;

  // Message to clarify what the action entails
  message: string;

  // Reference to the User that incurred the action
  user: IUser;

  createdDate: string;
};

/**
 * List of actions to keep track of the changes in a resources
 */
export type IActivities = IActivity[];
