import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { iListUsers } from "../../interfaces/users.interfaces";
import { listUsersSchema } from "../../schemas/users.schemas";


const listUsersService = async (): Promise<iListUsers> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const foundUsers: Array<User> = await userRepository.find();

    const users = listUsersSchema.parse(foundUsers);

    return users;

};

export default listUsersService;