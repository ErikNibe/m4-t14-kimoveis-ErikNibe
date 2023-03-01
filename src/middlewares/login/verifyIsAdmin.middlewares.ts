import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

const verifyIsAdminMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {

    const isAdmin = req.user.admin;

    if (!isAdmin) throw new AppError("Insufficient permission", 403);

    return next();

};

export default verifyIsAdminMiddleware;