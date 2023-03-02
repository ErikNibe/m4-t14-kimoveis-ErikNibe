import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { iCategory, iCreateCategory } from "../../interfaces/categories.interfaces";
import { categorySchema } from "../../schemas/categories.schemas";


const createCategoryService = async (payload: iCreateCategory): Promise<iCategory> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const foundCategory: Category | null = await categoryRepository.findOneBy({
        name: payload.name
    });

    if (foundCategory) throw new AppError("Category already exists", 409);

    const category = categoryRepository.create(payload);
    await categoryRepository.save(category);

    const newCategory = categorySchema.parse(category);

    return newCategory

};

export default createCategoryService;