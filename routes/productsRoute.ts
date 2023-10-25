import express from "express";

const router = express.Router();

import {
  findAllProduct,
  findOneProduct,
  createOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController";

router.get("/", findAllProduct);
router.get("/:productId", findOneProduct);
router.post("/", createOneProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

export default router;
