import express from "express";
import {
  createOneProduct,
  deleteProduct,
  findAllProduct,
  findOneProduct,
  updateProduct,
} from "../controllers/productsController";
import { validateProduct } from "../middlewares/productValidate";

const router = express.Router();

router.get("/", findAllProduct);
router.get("/:productId", findOneProduct);
router.post("/", validateProduct, createOneProduct);
router.put("/:productId", validateProduct, updateProduct);
router.delete("/:productId", deleteProduct);

export default router;
