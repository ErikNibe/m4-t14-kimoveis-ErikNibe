import { Router } from "express";
import { createScheduleController, listSchedulesByRealEstateController } from "../controller/schedules.controller";
import verifyIsAdminMiddleware from "../middlewares/login/verifyIsAdmin.middlewares";
import verifyTokenIsValidMiddleware from "../middlewares/login/verifyTokenIsValid.middleware";
import validateDataMiddleware from "../middlewares/validateData.middleware";
import { createScheduleSchema } from "../schemas/schedules.schemas";


const schedulesRouter: Router = Router();

schedulesRouter.post("", verifyTokenIsValidMiddleware, validateDataMiddleware(createScheduleSchema), createScheduleController);
schedulesRouter.get("/realEstate/:id", verifyTokenIsValidMiddleware, verifyIsAdminMiddleware, listSchedulesByRealEstateController);

export default schedulesRouter;