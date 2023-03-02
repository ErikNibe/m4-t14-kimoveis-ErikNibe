import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";


const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const user = await createUserService(req.body);

    return res.status(201).json(user);

};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users = await listUsersService();

    return res.json(users)

};

const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const userIdParam: number = parseInt(req.params.id);
    const { id, admin } = req.user;

    const updatedUser = await updateUserService(req.body, admin, userIdParam, id);

    return res.json(updatedUser);

};

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    await deleteUserService(parseInt(req.params.id));

    return res.status(204).send();

};

export {
    createUserController,
    listUsersController,
    updateUserController,
    deleteUserController
};