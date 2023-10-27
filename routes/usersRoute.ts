import express from "express";

// controllers
import {
  findAllUser,
  findSingleUser,
  createUser,
  deleteUser,
  updateUserInfo,
} from "../controllers/usersController";

// middlewares
import { validateParams } from "../middlewares/paramsValidate";
import { validateSchema } from "../middlewares/schemaValidate";

// schema
import { UserSchema } from "../models/user";

const router = express.Router();

// routes
router.get("/", findAllUser);
router.get("/:id", validateParams, findSingleUser);
router.post("/", validateSchema(UserSchema), createUser);
router.delete("/:id", validateParams, deleteUser);
router.put("/:id", validateParams, validateSchema(UserSchema), updateUserInfo);

export default router;
