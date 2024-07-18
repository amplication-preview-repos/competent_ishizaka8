import { SortOrder } from "../../util/SortOrder";

export type CategoryServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  slug?: SortOrder;
  description?: SortOrder;
  serviceId?: SortOrder;
};
