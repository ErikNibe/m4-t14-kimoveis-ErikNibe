import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";


const verifyEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const user: User | null =  await userRepository.findOne({
        where: {
            email: req.body.email
        }
    });

    if (user) {

        throw new AppError("Email already exists", 409);

    };

    return next();

};

export default verifyEmailExistsMiddleware;