export declare type IProvidedUser = {
    provider: string;
    id: string;
    displayName: string;
    name: {
        familyName: string;
        givenName: string;
        middleName: string;
    };
    emails: {
        value: string;
        type: string;
    }[];
    photos: {
        value: string;
    }[];
};
export declare type IUser = IProvidedUser & {
    organizations: string[];
    role: number;
};
//# sourceMappingURL=IUser.d.ts.map