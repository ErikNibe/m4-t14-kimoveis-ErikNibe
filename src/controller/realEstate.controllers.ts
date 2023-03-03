import { Request, Response } from "express";
import createRealEstateService from "../services/realEstate/createRealEstate.service";
import listRealEstatesService from "../services/realEstate/listRealEstates.service";


const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const realEstate = await createRealEstateService(req.body);

    return res.status(201).json(realEstate);

};

const listRealEstatesController = async (req: Request, res: Response): Promise<Response> => {

    const realEstates = await listRealEstatesService();

    return res.json(realEstates);
};

export {
    createRealEstateController,
    listRealEstatesController
};