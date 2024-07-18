import { InputJsonValue } from "../../types";
import { CategoryServiceWhereUniqueInput } from "../categoryService/CategoryServiceWhereUniqueInput";
import { CategoryServiceCreateNestedManyWithoutServicesInput } from "./CategoryServiceCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  images?: InputJsonValue;
  content?: string | null;
  title?: string | null;
  slug?: string | null;
  categoryService?: CategoryServiceWhereUniqueInput | null;
  categoryServices?: CategoryServiceCreateNestedManyWithoutServicesInput;
  price?: number | null;
  discountPrice?: number | null;
};
