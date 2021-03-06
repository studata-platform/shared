import { IActivities } from "./IActivity";
import { ILink } from "./ILink";
import { IRichText, IRichTextInput } from "./IRichText";
export declare type IEvent = {
    id?: string;
    slug: string;
    color: string;
    startDate: string;
    title: string;
    link?: ILink;
    richText: IRichText[];
    activities: IActivities;
};
export declare type ICreateEventInput = {
    slug: string;
    color: string;
    startDate: string;
    title: string;
    richText: IRichTextInput;
};
export declare type IUpdateEventInput = {
    slug?: string;
    color?: string;
    startDate?: string;
    title?: string;
    richText?: IRichTextInput;
};
//# sourceMappingURL=IEvent.d.ts.map