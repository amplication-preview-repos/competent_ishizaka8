import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type CategoryServiceWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  slug?: StringNullableFilter;
  description?: StringNullableFilter;
  services?: ServiceListRelationFilter;
  service?: ServiceWhereUniqueInput;
};
