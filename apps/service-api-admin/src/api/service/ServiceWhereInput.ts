import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryServiceWhereUniqueInput } from "../categoryService/CategoryServiceWhereUniqueInput";
import { CategoryServiceListRelationFilter } from "../categoryService/CategoryServiceListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ServiceWhereInput = {
  id?: StringFilter;
  images?: JsonFilter;
  content?: StringNullableFilter;
  title?: StringNullableFilter;
  slug?: StringNullableFilter;
  categoryService?: CategoryServiceWhereUniqueInput;
  categoryServices?: CategoryServiceListRelationFilter;
  price?: FloatNullableFilter;
  discountPrice?: FloatNullableFilter;
};
