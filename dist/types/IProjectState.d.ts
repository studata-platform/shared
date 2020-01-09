import { IActivities } from "./IActivity";
export declare type IProjectState = {
    id?: string;
    name: string;
    color: string;
    nextState?: IProjectState;
    rollbackState?: IProjectState;
    activities: IActivities;
};
export declare type ICreateProjectStateInput = {
    name: string;
    color: string;
    nextState?: string;
    rollbackState?: string;
};
export declare type IUpdateProjectStateInput = {
    name?: string;
    color?: string;
    nextState?: string;
    rollbackState?: string;
};
//# sourceMappingURL=IProjectState.d.ts.map