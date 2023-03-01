import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import { iUpdateUser, iUser } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schemas";

const updateUserService = async (payload: iUpdateUser, admin: boolean, userIdParam: number, userId: number): Promise<iUser> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const foundUser: User | null = await userRepository.findOneBy({
        id: userIdParam
    });

    if (!admin && userIdParam !== userId) throw new AppError("Insufficient permission.", 403);

    const user = userRepository.create({
        ...foundUser,
        ...payload
    });

    await userRepository.save(user);

    const updatedUser = userSchema.parse(user);

    return updatedUser;

};

export default updateUserService;