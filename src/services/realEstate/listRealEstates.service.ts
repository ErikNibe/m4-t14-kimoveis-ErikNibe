import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iListRealEstate } from "../../interfaces/realEstate.interfaces";
import { listRealEstatesSchema } from "../../schemas/realEstate.schemas";

const listRealEstatesService = async (): Promise<iListRealEstate> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const foundRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true,
            category: true
        }
    });

    const realEstates =  listRealEstatesSchema.parse(foundRealEstates);

    return realEstates;

};

export default listRealEstatesService;