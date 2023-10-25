import express from "express";

const router = express.Router();

import {
  findAllProduct,
  findOneProduct,
  createOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController";
import { validateProduct } from "../middlewares/productValidate";

router.get("/", findAllProduct);
router.get("/:productId", findOneProduct);
router.post("/", validateProduct, createOneProduct);
router.put("/:productId", validateProduct, updateProduct);
router.delete("/:productId", deleteProduct);

export default router;
