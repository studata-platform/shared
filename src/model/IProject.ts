declare global {
  type IProject = {
    shortName: string;
    title: string;

    organizations: IOrganization[];
    team: string[];

    attachments?: {
      name: string;
      location: string;
    }[];

    body?: {
      nodes: string;
      createdDate: string;
    }[];

    duration?: {
      startDate: string;
      endDate: string;
    };

    lastActivityDate: string;
    createdDate: string;
    updatedDate: string;
  };
}

export {};
