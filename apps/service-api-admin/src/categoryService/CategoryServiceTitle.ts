import { CategoryService as TCategoryService } from "../api/categoryService/CategoryService";

export const CATEGORYSERVICE_TITLE_FIELD = "title";

export const CategoryServiceTitle = (record: TCategoryService): string => {
  return record.title?.toString() || String(record.id);
};
