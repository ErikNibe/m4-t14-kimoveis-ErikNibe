import { z } from "zod";
import { hashSync } from "bcryptjs";

const createUserSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional().default(false),
    password: z.string().min(4).max(120)
});

const userSchema = createUserSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({password: true});

const listUsersSchema = userSchema.array(); 

const updateUserSchema = createUserSchema.omit({admin: true});

const updateUserVerificationSchema = createUserSchema.partial();

export {
    createUserSchema,
    userSchema,
    listUsersSchema,
    updateUserSchema,
    updateUserVerificationSchema
};