import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iListCategories } from "../../interfaces/categories.interfaces";
import { listCategoriesSchema } from "../../schemas/categories.schemas";

const listCategoriesService = async (): Promise<iListCategories> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const foundCategories: Array<Category> = await categoryRepository.find();

    const categories = listCategoriesSchema.parse(foundCategories);

    return categories;

};

export default listCategoriesService;