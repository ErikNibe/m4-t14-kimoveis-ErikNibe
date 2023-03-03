import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iListRealEstate } from "../../interfaces/realEstate.interfaces";


const listRealEstatesService = async (): Promise<iListRealEstate> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const foundRealEstates: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true
        }
    });

    return foundRealEstates;

};

export default listRealEstatesService;