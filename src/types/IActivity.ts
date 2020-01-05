import { IUser } from "./IUser";
import Event from "../data/Event";

export type IActivity = {
  id: string;

  // Name of the mutation resolver that handled the action
  event: Event;

  // Data to clarify what was changed in the event
  data?: string;

  // Reference to the User that incurred the action
  user: IUser;

  createdDate: string;
};

export type IActivityInput = {
  // Name of the mutation resolver that handled the action
  event: Event;

  // Message to clarify what the action entails
  data?: string;
};

/**
 * List of actions to keep track of the changes in a resources
 */
export type IActivities = IActivity[];
