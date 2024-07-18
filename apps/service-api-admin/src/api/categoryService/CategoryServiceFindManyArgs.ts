import { CategoryServiceWhereInput } from "./CategoryServiceWhereInput";
import { CategoryServiceOrderByInput } from "./CategoryServiceOrderByInput";

export type CategoryServiceFindManyArgs = {
  where?: CategoryServiceWhereInput;
  orderBy?: Array<CategoryServiceOrderByInput>;
  skip?: number;
  take?: number;
};
