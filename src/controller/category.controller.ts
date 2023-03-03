import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listRealEstatesByCategoryService from "../services/categories/listRealEstatesByCategory.service";


const createCategoryController = async (req: Request, res: Response): Promise<Response> => {

    const category = await createCategoryService(req.body);

    return res.status(201).json(category);

};

const listCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categories = await listCategoriesService();

    return res.json(categories);

};

const listRealEstatesByCategory = async (req: Request, res: Response): Promise<Response> => {

    const realEstaByCategory = await listRealEstatesByCategoryService(parseInt(req.params.id));

    return res.json(realEstaByCategory);
    
};

export {
    createCategoryController,
    listCategoriesController,
    listRealEstatesByCategory
};