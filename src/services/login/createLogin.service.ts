import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import { iCreateLogin } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";


const createLoginService = async (payload: iCreateLogin): Promise<string> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const foundUser: User | null = await userRepository.findOneBy({
        email: payload.email
    });

    if (!foundUser) throw new AppError("Invalid credentials", 401);

    const pwdMatches = await compare(payload.password, foundUser.password);

    if (!pwdMatches) throw new AppError("Invalid credentials", 401);

    const token: string = jwt.sign(
        {
            admin: foundUser.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: "24h",
            subject: String(foundUser.id)
        }
    );

    return token;

};

export default createLoginService;