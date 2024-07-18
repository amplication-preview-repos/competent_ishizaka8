import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  images?: SortOrder;
  content?: SortOrder;
  title?: SortOrder;
  slug?: SortOrder;
  categoryServiceId?: SortOrder;
  price?: SortOrder;
  discountPrice?: SortOrder;
};
