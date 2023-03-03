import { Request, Response } from "express";
import createScheduleService from "../services/schedules/createSchedule.service";
import listSchedulesByRealEstateService from "../services/schedules/listSchedulesByRealEstate.service";

const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = req.user.id;

    const schedule = await createScheduleService(req.body, userId);

    return res.status(201).json({
        message: schedule
    });

};

const listSchedulesByRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const schedulesByRealEstate = await listSchedulesByRealEstateService(parseInt(req.params.id));

    return res.json(schedulesByRealEstate);
    
};

export {
    createScheduleController,
    listSchedulesByRealEstateController
};