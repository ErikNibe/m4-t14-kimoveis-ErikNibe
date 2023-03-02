import { z } from "zod";
import { createCategorySchema } from "../schemas/categories.schemas";


type iCreateCategory = z.infer<typeof createCategorySchema>;

export {
    iCreateCategory
};