import express from "express";
import {
  createOneProduct,
  deleteProduct,
  findAllProduct,
  findOneProduct,
  updateProduct,
} from "../controllers/productsController";

const router = express.Router();

router.get("/", findAllProduct);
router.get("/:productId", findOneProduct);
router.post("/", createOneProduct);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

export default router;
