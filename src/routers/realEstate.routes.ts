import { Router } from "express";
import { createRealEstateController, listRealEstatesController } from "../controller/realEstate.controllers";
import verifyIsAdminMiddleware from "../middlewares/login/verifyIsAdmin.middlewares";
import verifyTokenIsValidMiddleware from "../middlewares/login/verifyTokenIsValid.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createRealEstateSchema } from "../schemas/realEstate.schemas"; 

const realEstateRouter: Router = Router();

realEstateRouter.post("", verifyTokenIsValidMiddleware, verifyIsAdminMiddleware, validateDataMiddleware(createRealEstateSchema), createRealEstateController);
realEstateRouter.get("", listRealEstatesController);

export default realEstateRouter;