import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iCreateRealEstate } from "../../interfaces/realEstate.interfaces";


const createRealEstateService = async (payload: iCreateRealEstate) => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

    const foundCategory: Category | null = await categoryRepository.findOneBy({
        id: payload.categoryId!
    });

    if (!foundCategory) throw new AppError("Category not found", 404);

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const founAddress = await addressRepository.findOne({
        where: {
            street: payload.address.street,
            zipCode: payload.address.zipCode,
            number: payload.address.number!,
            city: payload.address.city,
            state: payload.address.state
        }
    });
    
    if (founAddress) throw new AppError("Address already exists", 409);

    const address: Address = addressRepository.create(payload.address);
    await addressRepository.save(address);

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);
    
    const realEstate = realEstateRepository.create({
        value: payload.value,
        size: payload.size,
        address: address,
        category: foundCategory
    });
    await realEstateRepository.save(realEstate);

    return realEstate;

};

export default createRealEstateService;