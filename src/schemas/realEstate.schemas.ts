import { z } from "zod";


const createAddressSchema = z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().optional(),
    city: z.string().max(20),
    state: z.string().max(2)
});

const addressSchema = createAddressSchema.extend({
    id: z.number()
});

const createRealEstateSchema = z.object({
    categoryId: z.number(),
    value: z.number().or(z.string()),
    size: z.number(),
    address: createAddressSchema,
});

const realEstateSchema = createRealEstateSchema.extend({
    id: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date()
});

export {
    createRealEstateSchema,
    realEstateSchema
};