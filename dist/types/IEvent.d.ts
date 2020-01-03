import { ILink } from "./ILink";
import { IRichText } from "./IRichText";
import { IActivities } from "./IActivity";
export declare type IEvent = {
    slug: string;
    color: string;
    startDate: string;
    title: string;
    link?: ILink;
    richText: IRichText[];
    activity: IActivities;
};
//# sourceMappingURL=IEvent.d.ts.map