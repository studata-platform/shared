declare global {
  type IEvent = {
    slug: string;
    color: string;
    startDate: string;
    title: string;
    description: string;
    link?: ILink;
  };
}

export {};
