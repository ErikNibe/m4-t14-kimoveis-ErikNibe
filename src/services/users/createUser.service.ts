import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { iCreateUser, iUser } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schemas";


const createUserService = async (payload: iCreateUser): Promise<iUser> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    
    const user: User = userRepository.create(payload);
    await userRepository.save(user);

    const newUser = userSchema.parse(user);

    return newUser;

};

export default createUserService;