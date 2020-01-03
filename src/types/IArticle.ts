import { IUser } from "./IUser";
import { IImage } from "./IImage";
import { IRichText } from "./IRichText";
import { IActivities } from "./IActivity";

export type IArticle = {
  slug: string;
  title: string;
  description: string;
  target: number;
  minScore: number;
  maxScore: number;
  tags: number;
  image: IImage;
  author?: IUser;
  richText: IRichText[];
  activity: IActivities[];
  publishDate: string;
};
