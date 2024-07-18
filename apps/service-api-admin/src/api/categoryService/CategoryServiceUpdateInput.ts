import { ServiceUpdateManyWithoutCategoryServicesInput } from "./ServiceUpdateManyWithoutCategoryServicesInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type CategoryServiceUpdateInput = {
  title?: string | null;
  slug?: string | null;
  description?: string | null;
  services?: ServiceUpdateManyWithoutCategoryServicesInput;
  service?: ServiceWhereUniqueInput | null;
};
