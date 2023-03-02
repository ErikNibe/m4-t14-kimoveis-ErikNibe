import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, RealEstate } from "../../entities";
import { iCreateRealEstate } from "../../interfaces/realEstate.interfaces";
import { realEstateSchema } from "../../schemas/realEstate.schemas";


const createRealEstateService = async (payload: iCreateRealEstate) => {

    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);

    const address: Address = addressRepository.create(payload.address);
    await addressRepository.save(address);

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate = realEstateRepository.create({
        ...payload,
        address: address
    });
    await realEstateRepository.save(realEstate);

    const newRealEstate = realEstateSchema.parse(realEstate);

    return newRealEstate;

};

export default createRealEstateService;