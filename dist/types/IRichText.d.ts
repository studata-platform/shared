import { IUser } from "./IUser";
/**
 * Versioned list to keep track of the changes in the rich text component
 */
export declare type IRichText = {
    id: string;
    nodes: string;
    author: IUser;
    createdDate: string;
};
/**
 * Versioned list to keep track of the changes in the rich text component
 */
export declare type IRichTextInput = {
    nodes: string;
    author: IUser;
};
//# sourceMappingURL=IRichText.d.ts.map