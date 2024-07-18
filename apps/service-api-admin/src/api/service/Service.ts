import { JsonValue } from "type-fest";
import { CategoryService } from "../categoryService/CategoryService";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  images: JsonValue;
  content: string | null;
  title: string | null;
  slug: string | null;
  categoryService?: CategoryService | null;
  categoryServices?: Array<CategoryService>;
  price: number | null;
  discountPrice: number | null;
};
