import { IActivities } from "./IActivity";

export type IProjectState = {
  id?: string;

  name: string;
  color: string;
  nextState?: IProjectState; // The next state that the project can go to
  rollbackState?: IProjectState; // The state that the project may roll back to

  activity: IActivities;
};

export type ICreateProjectStateInput = {
  name: string;
  color: string;
  nextState?: string; // Reference to another ProjectState
  rollbackState?: string; // Reference to another ProjectState
};

export type IUpdateProjectStateInput = {
  name?: string;
  color?: string;
  nextState?: string; // Reference to another ProjectState
  rollbackState?: string; // Reference to another ProjectState
};
