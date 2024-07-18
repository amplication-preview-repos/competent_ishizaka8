import { Service } from "../service/Service";

export type CategoryService = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  slug: string | null;
  description: string | null;
  services?: Array<Service>;
  service?: Service | null;
};
