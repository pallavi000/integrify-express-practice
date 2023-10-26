import express from "express";

const router = express.Router();

import {
  createOneCategory,
  deleteCategory,
  findAllCategory,
  findOneCategory,
  updateCategory,
} from "../controllers/categoriesController";
import { validateCategory } from "../middlewares/categoryValidate";

router.get("/", findAllCategory);
router.get("/:categoryId", findOneCategory);
router.post("/", validateCategory, createOneCategory);
router.put("/:categoryId", validateCategory, updateCategory);
router.delete("/:categoryId", deleteCategory);

export default router;
