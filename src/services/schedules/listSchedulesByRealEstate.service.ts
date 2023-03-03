import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";


const listSchedulesByRealEstateService = async (realEstateId: number) => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const foundSchedulesByRealEstate = await realEstateRepository.createQueryBuilder("real_estate")
    .innerJoinAndSelect("real_estate.address", "addresses")
    .innerJoinAndSelect("real_estate.category", "categories")
    .innerJoinAndSelect("real_estate.schedules", "schedules")
    .innerJoinAndSelect("schedules.user", "users")
    .where("real_estate.id = :id", {id: realEstateId})
    .getOne();

    if (!foundSchedulesByRealEstate) throw new AppError("RealEstate not found", 404);

    return foundSchedulesByRealEstate;

};

export default listSchedulesByRealEstateService;