import { DeepPartial } from "typeorm";
import { z } from "zod";
import { createUserSchema, listUsersSchema, updateUserSchema, userSchema } from "../schemas/users.schemas";

type iCreateUser = z.infer<typeof createUserSchema>;
type iUser = z.infer<typeof userSchema>;
type iListUsers = z.infer<typeof listUsersSchema>;
type iUpdateUser = DeepPartial<z.infer<typeof updateUserSchema>>;

export {
    iCreateUser,
    iUser,
    iListUsers,
    iUpdateUser
};