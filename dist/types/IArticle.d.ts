import ArticleState from "../data/ArticleState";
import { IActivities } from "./IActivity";
import { IImage } from "./IImage";
import { IRichText } from "./IRichText";
import { IUser } from "./IUser";
export declare type IArticle = {
    id?: string;
    slug: string;
    title: string;
    description: string;
    image: IImage;
    author?: IUser;
    richText: IRichText[];
    status: ArticleState;
    publishDate: string;
    activities: IActivities;
};
//# sourceMappingURL=IArticle.d.ts.map