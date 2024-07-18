import { ServiceCreateNestedManyWithoutCategoryServicesInput } from "./ServiceCreateNestedManyWithoutCategoryServicesInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type CategoryServiceCreateInput = {
  title?: string | null;
  slug?: string | null;
  description?: string | null;
  services?: ServiceCreateNestedManyWithoutCategoryServicesInput;
  service?: ServiceWhereUniqueInput | null;
};
