import { z } from "zod";
import { createLoginSchema } from "../schemas/login.schemas";

type iCreateLogin = z.infer<typeof createLoginSchema>;

export {
    iCreateLogin
};