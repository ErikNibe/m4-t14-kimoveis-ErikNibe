import { z } from "zod";
import { categorySchema, createCategorySchema, listCategoriesSchema } from "../schemas/categories.schemas";


type iCreateCategory = z.infer<typeof createCategorySchema>;
type iCategory = z.infer<typeof categorySchema>;
type iListCategories = z.infer<typeof listCategoriesSchema>;

export {
    iCreateCategory,
    iCategory,
    iListCategories
};