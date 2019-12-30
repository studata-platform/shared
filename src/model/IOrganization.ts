declare global {
  type IOrganization = {
    _id: string;
    name: string;
    image?: IImage;
    location?: ILocation;
  };
}

export {};
