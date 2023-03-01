import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controller/users.controllers";
import verifyIsAdminMiddleware from "../middlewares/login/verifyIsAdmin.middlewares";
import verifyTokenIsValidMiddleware from "../middlewares/login/verifyTokenIsValid.middleware";
import verifyEmailExistsMiddleware from "../middlewares/users/verifyEmailExists.middleware";
import verifyUserExistsMiddleware from "../middlewares/users/verifyUserExists.middlewares";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createUserSchema, updateUserVerificationSchema } from "../schemas/users.schemas";


const userRoutes: Router = Router();

userRoutes.post("", validateDataMiddleware(createUserSchema), verifyEmailExistsMiddleware, createUserController);
userRoutes.get("", verifyTokenIsValidMiddleware, verifyIsAdminMiddleware, listUsersController);
userRoutes.patch("/:id", verifyTokenIsValidMiddleware, verifyUserExistsMiddleware, validateDataMiddleware(updateUserVerificationSchema), updateUserController);
userRoutes.delete("/:id", verifyTokenIsValidMiddleware, verifyUserExistsMiddleware, verifyIsAdminMiddleware, deleteUserController);

export default userRoutes;