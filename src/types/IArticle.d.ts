import { IImage } from "./IImage";
import { IUser } from "./IUser";
import { IRichText } from "./IRichText";
import { IActivities } from "./IActivity";

export type IArticle = {
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
