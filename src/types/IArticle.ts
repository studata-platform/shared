import { IUser } from "./IUser";
import { IImage } from "./IImage";
import { IRichText } from "./IRichText";
import { IActivities } from "./IActivity";

export type IArticle = {
  slug: string;
  title: string;
  description: string;
  image: IImage;
  author?: IUser;
  richText: IRichText[];
  activity: IActivities[];
  status: number;
  publishDate: string;
};
