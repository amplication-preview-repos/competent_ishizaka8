import { InputJsonValue } from "../../types";
import { CategoryServiceWhereUniqueInput } from "../categoryService/CategoryServiceWhereUniqueInput";
import { CategoryServiceUpdateManyWithoutServicesInput } from "./CategoryServiceUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  images?: InputJsonValue;
  content?: string | null;
  title?: string | null;
  slug?: string | null;
  categoryService?: CategoryServiceWhereUniqueInput | null;
  categoryServices?: CategoryServiceUpdateManyWithoutServicesInput;
  price?: number | null;
  discountPrice?: number | null;
};
