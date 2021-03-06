import { IUser } from "./IUser";

/**
 * Versioned list to keep track of the changes in the rich text component
 */
export type IRichText = {
  id: string;

  // JSON string generated via SlateJS
  nodes: string;

  // User that created the resource
  author: IUser;

  // ISO String created on the moment that this resources was added to the database
  createdDate: string;
};

/**
 * Versioned list to keep track of the changes in the rich text component
 */
export type IRichTextInput = {
  // JSON string generated via SlateJS
  nodes: string;

  // User that created the resource
  author: IUser;
};
