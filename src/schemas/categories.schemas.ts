import { z } from "zod";


const createCategorySchema = z.object({
    name: z.string()
});

const categorySchema = createCategorySchema.extend({
    id: z.number()
});

const listCategoriesSchema = categorySchema.array();

export {
    createCategorySchema,
    categorySchema,
    listCategoriesSchema
};