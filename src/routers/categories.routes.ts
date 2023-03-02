import { Router } from "express";
import { createCategoryController, listCategoriesController } from "../controller/category.controller";
import verifyIsAdminMiddleware from "../middlewares/login/verifyIsAdmin.middlewares";
import verifyTokenIsValidMiddleware from "../middlewares/login/verifyTokenIsValid.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createCategorySchema } from "../schemas/categories.schemas";


const categoryRoutes: Router = Router();

categoryRoutes.post("", verifyTokenIsValidMiddleware, verifyIsAdminMiddleware, validateDataMiddleware(createCategorySchema), createCategoryController);
categoryRoutes.get("", listCategoriesController)

export default categoryRoutes;