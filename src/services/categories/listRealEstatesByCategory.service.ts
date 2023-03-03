import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";


const listRealEstatesByCategoryService = async (categoryId: number) => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const foundRealEstatesByCategory: Category | null = await categoryRepository.findOne({
        where: {
            id: categoryId
        },
        relations: {
            realEstate: true
        }
    });

    if (!foundRealEstatesByCategory) throw new AppError("Category not found", 404);

    return foundRealEstatesByCategory;

};

export default listRealEstatesByCategoryService;