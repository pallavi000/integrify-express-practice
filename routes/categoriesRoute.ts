import express from "express";

// controllers
import {
  createOneCategory,
  deleteCategory,
  findAllCategory,
  findOneCategory,
  updateCategory,
} from "../controllers/categoriesController";

// middlewares
import { validateSchema } from "../middlewares/schemaValidate";
import { validateParams } from "../middlewares/paramsValidate";

// schema
import { CategorySchema } from "../models/category";

const router = express.Router();

// routes
router.get("/", findAllCategory);
router.get("/:id", validateParams, findOneCategory);
router.post("/", validateSchema(CategorySchema), createOneCategory);
router.put(
  "/:id",
  validateParams,
  validateSchema(CategorySchema),
  updateCategory
);
router.delete("/:id", validateParams, deleteCategory);

export default router;
