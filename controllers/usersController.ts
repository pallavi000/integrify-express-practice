import { Request, Response, NextFunction } from 'express';
import  UserService  from '../services/userService'
import { ApiError } from '../errors/ApiError';

export function findAllUser(_: Request, res: Response) {
    const users = UserService.findAllUser();
    res.json({ users });
}
export function findSingleUser(
    req: Request,
    res: Response,
    next: NextFunction) {
    const userId = +req.params.userId;
    const user = UserService.findSingleUser(userId);
    try { 
        if (!user) {
            next(ApiError.resourceNotFound("User not found."));
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        
    }
}
export function createUser(req: Request, res: Response) {
    const newUser = req.body;

    const user = UserService.createUser(newUser);
    res.status(201).json({ user });
}

export function deleteUser(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
        const userId = +req.params.userId;
        const userIndex = UserService.deleteUser(userId);
        if (userIndex === -1) {
            next(ApiError.resourceNotFound("User not found."));
            return;
        } 
        res.status(201).json({ message: "User deleted successfully" });
    } catch(error) {
        next(ApiError.interal("Internernal error..."));
    }
}
export function updateUserInfo(
    req: Request,
    res: Response,
    next: NextFunction) {
    try {
        const userId = +req.params.userId;
        const userData = req.body;
        const userIndex = UserService.findIndex(userId);
        if (userIndex === -1) {
            next(ApiError.resourceNotFound("User not found."));
            return; 
        }
        const updatedUser = UserService.updateUserInfo(userIndex, userData);
        res.json({ message: "User updated successfully" })
    } catch (error) {
        next(ApiError.interal("Internernal error..."));
    }
}

export default {
    findAllUser,
    findSingleUser,
    createUser,
    deleteUser,
    updateUserInfo,
}