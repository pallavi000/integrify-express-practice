import express from "express";

const router = express.Router();

import {
  createOneCategory,
  deleteCategory,
  findAllCategory,
  findOneCategory,
  updateCategory,
} from "../controllers/categoriesController";

router.get("/", findAllCategory);
router.get("/:categoryId", findOneCategory);
router.post("/", createOneCategory);
router.put("/:categoryId", updateCategory);
router.delete("/:categoryId", deleteCategory);

export default router;
