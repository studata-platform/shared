import { IImage } from "./IImage";
import { IUser } from "./IUser";

export type IArticle = {
  slug: string;
  title: string;
  description: string;
  tags: number;
  image: IImage;
  author: IUser;
  blocks: string[];
  publishedDate: string;
  updatedDate: string;
  target: number;
  minScore: number;
  maxScore: number;
};
