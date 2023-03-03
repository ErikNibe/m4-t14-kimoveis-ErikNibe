import { z } from "zod";
import { categorySchema } from "./categories.schemas";


const createAddressSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2)
});

const createRealEstateSchema = z.object({
    categoryId: z.number(),
    value: z.number().or(z.string()),
    size: z.number().positive(),
    address: createAddressSchema,
});

const realEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: categorySchema
}).omit({categoryId: true});

const listRealEstatesSchema = realEstateSchema.array();

export {
    createRealEstateSchema,
    realEstateSchema,
    listRealEstatesSchema
};