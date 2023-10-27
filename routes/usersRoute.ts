import express from "express";

import UserController from "../controllers/usersController";
import { validateUser } from "../middlewares/userValidate";

const router = express.Router();
router.get("/", UserController.findAllUser);
router.get("/:userId", UserController.findSingleUser);
router.post("/", validateUser, UserController.createUser);
router.delete("/:userId", UserController.deleteUser);
router.put("/:userId", validateUser, UserController.updateUserInfo);

export default router
