import { IUser } from "./IUser";

export type IActivity = {
  // Name to describe the event (Should be uppercase, can only contain A-Z (uppercase) and _ characters)
  event: string;

  // Name of the resolver in which the activity occured
  resolver: string;

  // Name of the property/properties that were updated
  property: string;

  // User that incurred the action
  author: IUser;

  // ISO String created on the moment that this resources was added to the database
  createdDate: string;
};

/**
 * List of actions to keep track of the changes in a resources
 */
export type IActivities = IActivity[];
