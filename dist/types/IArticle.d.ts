import { IUser } from "./IUser";
import { IImage } from "./IImage";
import { IRichText } from "./IRichText";
import { IActivities } from "./IActivity";
export declare type IArticle = {
    slug: string;
    title: string;
    description: string;
    tags: number;
    image: IImage;
    author?: IUser;
    target: number;
    minScore: number;
    maxScore: number;
    richText: IRichText[];
    activity: IActivities[];
    publishDate: string;
};
//# sourceMappingURL=IArticle.d.ts.map