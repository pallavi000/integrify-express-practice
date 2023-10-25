import express from "express";

const router = express.Router();

import {
  findAllCategory,
  findOneCategory,
} from "../controllers/categoriesController";

router.get("/", findAllCategory);
router.get("/:categoryId", findOneCategory);
// router.post("/", createOneCategory);
// router.put("/:categoryId", updateCategory);
// router.delete("/:categoryId", deleteCategory);

export default router;
