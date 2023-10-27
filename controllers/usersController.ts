import { Request, Response, NextFunction } from "express";

// services
import UserService from "../services/userService";

// error builder
import { ApiError } from "../errors/ApiError";

export function findAllUser(_: Request, res: Response, next: NextFunction) {
  try {
    const users = UserService.findAllUser();
    res.json(users);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function findSingleUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = Number(req.params.id);
    const user = UserService.findSingleUser(userId);
    if (!user) {
      next(ApiError.resourceNotFound("User not found."));
      return;
    }
    res.json(user);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const newUser = req.body;
    const user = UserService.createUser(newUser);
    res.status(201).json(user);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export function deleteUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = Number(req.params.id);
    const user = UserService.findSingleUser(userId);
    if (!user) {
      next(ApiError.resourceNotFound("User not found."));
      return;
    }
    UserService.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    next(ApiError.internal("Internernal error..."));
  }
}
export function updateUserInfo(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = Number(req.params.id);
    const userData = req.body;
    const user = UserService.findSingleUser(userId);
    if (!user) {
      next(ApiError.resourceNotFound("User not found."));
      return;
    }
    const updatedUser = UserService.updateUserInfo(userId, userData);
    res.json(updatedUser);
  } catch (error) {
    next(ApiError.internal("Internal server error"));
  }
}

export default {
  findAllUser,
  findSingleUser,
  createUser,
  deleteUser,
  updateUserInfo,
};
