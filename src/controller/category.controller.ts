import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";

const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const category = await createCategoryService(req.body);

    return res.status(201).json(category);

};

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categories = await listCategoriesService();

    return res.json(categories);

};

export {
    createCategoryController,
    listCategoriesController
}